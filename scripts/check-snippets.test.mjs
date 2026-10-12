import assert from "node:assert/strict";
import {mkdir, mkdtemp, readFile, rm, writeFile} from "node:fs/promises";
import {tmpdir} from "node:os";
import path from "node:path";
import test from "node:test";

import {checkSnippets} from "./check-snippets.mjs";

const fixture = async (t, files) => {
	const root = await mkdtemp(path.join(tmpdir(), "doc-snippets-"));
	t.after(() => rm(root, {recursive: true, force: true}));
	await mkdir(path.join(root, "src/code"), {recursive: true});
	await mkdir(path.join(root, "src/docs"), {recursive: true});
	for (const [name, content] of Object.entries(files)) {
		const target = path.join(root, name);
		await mkdir(path.dirname(target), {recursive: true});
		await writeFile(target, content);
	}
	return root;
};

test("checks unsupported snippet formats and localized file references without modifying files", async (t) => {
	const root = await fixture(t, {
		"src/code/default.tree": "src/\n  index.ts\n",
		"src/code/en.yaml": "title: Hello\r\n",
		"src/code/tsconfig.json": "{}\n",
		"src/code/image.png": Buffer.from([137, 80, 78, 71, 10]),
		"src/docs/en/example.mdx": '```ts file="./example.ts.txt"\n```\n',
		"src/docs/en/example.ts.txt": "export default 1;\n",
	});
	const result = await checkSnippets({root});
	assert.equal(result.issues.length, 3);
	assert.equal(
		await readFile(path.join(root, "src/code/en.yaml"), "utf8"),
		"title: Hello\r\n",
	);
});

test("fixes only selected files and preserves internal blank lines", async (t) => {
	const root = await fixture(t, {
		"src/code/selected.ts": "const value = 1;\n\n\nexport {value};\n\n",
		"src/code/untouched.ts": "export {};\n",
	});
	const result = await checkSnippets({
		root,
		fix: true,
		files: ["src/code/selected.ts"],
	});
	assert.equal(result.fixed, 1);
	assert.equal(
		await readFile(path.join(root, "src/code/selected.ts"), "utf8"),
		"const value = 1;\n\n\nexport {value};",
	);
	assert.equal(
		await readFile(path.join(root, "src/code/untouched.ts"), "utf8"),
		"export {};\n",
	);
});

test("removes only blank final lines from inline fences and retains the document newline", async (t) => {
	const root = await fixture(t, {
		"src/docs/example.mdx":
			'Before.\n\n```ts\nconst value = 1;\n\n\nexport {value};\n  \n\n```\n\n```ts file="../code/value.ts"\n```\n',
		"src/code/value.ts": "export {};",
	});
	assert.equal((await checkSnippets({root})).issues.length, 1);
	await checkSnippets({root, fix: true});
	assert.equal((await checkSnippets({root})).issues.length, 0);
	const markdown = await readFile(
		path.join(root, "src/docs/example.mdx"),
		"utf8",
	);
	assert.ok(markdown.includes("const value = 1;\n\n\nexport {value};\n```"));
	assert.ok(markdown.endsWith("```\n"));
});

test("handles CRLF and whitespace-only final lines without reading references shown inside Markdown examples", async (t) => {
	const root = await fixture(t, {
		"src/docs/example.mdx":
			'````md\r\n```ts file="missing.ts"\r\n```\r\n````\r\n\r\n~~~ts\r\nexport {};\r\n  \r\n~~~\r\n',
		"src/code/layout.tree": "src/\n  index.ts\n  \t",
	});
	assert.equal((await checkSnippets({root})).issues.length, 2);
	await checkSnippets({root, fix: true});
	assert.equal((await checkSnippets({root})).issues.length, 0);
	assert.ok(
		(await readFile(path.join(root, "src/docs/example.mdx"), "utf8")).endsWith(
			"export {};\r\n~~~\r\n",
		),
	);
	assert.equal(
		await readFile(path.join(root, "src/code/layout.tree"), "utf8"),
		"src/\n  index.ts",
	);
});

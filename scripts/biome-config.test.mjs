import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";
import {
	copyFileSync,
	mkdirSync,
	mkdtempSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import {tmpdir} from "node:os";
import path from "node:path";
import test from "node:test";
import {fileURLToPath} from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const biome = (file, source) =>
	spawnSync(
		path.join(root, "node_modules/.bin/biome"),
		["check", "--write", `--stdin-file-path=${file}`],
		{cwd: root, input: source, encoding: "utf8"},
	);

test("formats snippets with classic React, agreed import groups, and no terminal newline", () => {
	const result = biome(
		"src/code/entrypoints/popup/probe.tsx",
		`import {local} from "./local";
import styles from "./styles.module.scss";
import {definePopup} from "adnbn";
import React from "react";
import {remote} from "other-package";
import {Component} from "@components/Component";
export default definePopup({render: () => <Component className={styles.main}>{local + remote}</Component>});
`,
	);
	assert.equal(result.status, 0, result.stderr);
	const imports = result.stdout
		.split("\n")
		.filter((line) => line.startsWith("import "));
	assert.deepEqual(imports, [
		'import React from "react";',
		'import {definePopup} from "adnbn";',
		'import {remote} from "other-package";',
		'import styles from "./styles.module.scss";',
		'import {Component} from "@components/Component";',
		'import {local} from "./local";',
	]);
	assert.ok(!result.stdout.endsWith("\n"));
	assert.ok(
		biome("src/components/probe.ts", "export const value = 1;").stdout.endsWith(
			"\n",
		),
	);
	assert.ok(
		!biome(
			"src/code/entrypoints/popup/probe.html",
			"<p>Hello</p>\n",
		).stdout.endsWith("\n"),
	);
	const tag =
		'<head>\n\t<meta content="Your extension start page" name="description" /> <!-- [!code highlight] -->\n</head>';
	assert.equal(
		biome("src/code/entrypoints/popup/html/generated.html", tag).stdout,
		tag,
	);
});

test("preserves API declarations while keeping executable snippets and HTML templates checked", (t) => {
	const directory = mkdtempSync(path.join(tmpdir(), "biome-config-"));
	t.after(() => rmSync(directory, {recursive: true, force: true}));
	copyFileSync(
		path.join(root, "biome.json"),
		path.join(directory, "biome.json"),
	);
	const check = (file, source) => {
		const target = path.join(directory, file);
		mkdirSync(path.dirname(target), {recursive: true});
		writeFileSync(target, source);
		return spawnSync(
			path.join(root, "node_modules/.bin/biome"),
			["check", file],
			{cwd: directory, encoding: "utf8"},
		);
	};
	assert.doesNotMatch(
		check(
			"src/code/entrypoints/popup/classic.tsx",
			'import React from "react";\n\nexport default () => <p>Hello</p>;',
		).stderr,
		/noUnusedImports/,
	);
	const declaration = "type Handler = (value: any) => {};";
	const reference = check(
		"src/code/api/adnbn/popup/contracts/probe.ts",
		declaration,
	);
	assert.equal(reference.status, 0, reference.stderr);
	assert.equal(
		check(
			"src/code/api/adnbn/sidebar/contracts/registry.ts",
			"export interface SidebarAliasRegistry {}",
		).status,
		0,
	);
	const executable = check("src/code/entrypoints/popup/probe.ts", declaration);
	assert.match(executable.stderr, /noExplicitAny/);
	assert.match(executable.stderr, /noBannedTypes/);
	assert.match(executable.stderr, /noUnusedVariables/);
	const apiExample = check(
		"src/code/api/adnbn/popup/examples/probe.ts",
		declaration,
	);
	assert.match(apiExample.stderr, /noExplicitAny/);
	assert.match(apiExample.stderr, /noBannedTypes/);
	assert.match(apiExample.stderr, /noUnusedVariables/);
	assert.equal(
		check(
			"src/code/api/adnbn/popup/contracts/probe.tsx",
			"export default () => <button>Click</button>;",
		).status,
		1,
	);
	assert.equal(
		check("src/code/entrypoints/popup/html/generated.html", "<html></html>")
			.status,
		0,
	);
	assert.equal(
		check("src/code/entrypoints/popup/template/template.html", "<html></html>")
			.status,
		1,
	);
});

import {readdir, readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath, pathToFileURL} from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const textExtensions = new Set([
	".ts",
	".tsx",
	".js",
	".jsx",
	".json",
	".jsonc",
	".html",
	".css",
	".scss",
	".yaml",
	".yml",
	".tree",
	".txt",
	".svg",
]);
const fences =
	/(^[ \t]*(`{3,}|~{3,})[^\r\n]*\r?\n)([\s\S]*?)(^[ \t]*\2[ \t]*\r?$)/gm;
const listFiles = async (directory) => {
	const entries = await readdir(directory, {
		recursive: true,
		withFileTypes: true,
	});
	return entries
		.filter((entry) => entry.isFile())
		.map((entry) => path.join(entry.parentPath, entry.name));
};

const cleanFences = (markdown) =>
	markdown.replace(fences, (block, opening, _fence, body, closing) => {
		const content = body.replace(/[ \t\r\n]+$/, "");
		const cleaned = content
			? content + (opening.endsWith("\r\n") ? "\r\n" : "\n")
			: "";
		return cleaned === body ? block : opening + cleaned + closing;
	});

export const checkSnippets = async ({
	root = projectRoot,
	files,
	fix = false,
} = {}) => {
	const selected = files?.length
		? new Set(files.map((file) => path.resolve(root, file)))
		: undefined;
	const documents = (await listFiles(path.join(root, "src/docs"))).filter(
		(file) => /\.mdx?$/.test(file),
	);
	const snippets = new Set(
		(await listFiles(path.join(root, "src/code")))
			.filter((file) => textExtensions.has(path.extname(file)))
			.filter((file) => file !== path.join(root, "src/code/tsconfig.json")),
	);
	const issues = [];
	let checked = 0;
	let fixed = 0;

	for (const file of documents) {
		const markdown = await readFile(file, "utf8");
		for (const match of markdown.matchAll(fences)) {
			const reference = match[1].match(/\bfile=["'`]([^"'`]+)["'`]/)?.[1];
			if (!reference) {
				continue;
			}
			const target = reference.startsWith("<root>/")
				? path.resolve(root, reference.slice(7))
				: path.resolve(path.dirname(file), reference);
			const relative = path.relative(root, target);
			if (relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
				throw new Error(
					`Snippet reference is outside the project: ${reference}`,
				);
			}
			snippets.add(target);
		}
		if (selected && !selected.has(file)) {
			continue;
		}
		checked++;
		const cleaned = cleanFences(markdown);
		if (cleaned !== markdown) {
			if (fix) {
				await writeFile(file, cleaned);
				fixed++;
			} else {
				issues.push(
					`${path.relative(root, file)}: empty final line in a fenced example`,
				);
			}
		}
	}
	for (const file of snippets) {
		if (selected && !selected.has(file)) {
			continue;
		}
		checked++;
		const source = await readFile(file, "utf8");
		const cleaned = source.replace(/[ \t\r\n]+$/, "");
		if (cleaned !== source) {
			if (fix) {
				await writeFile(file, cleaned);
				fixed++;
			} else {
				issues.push(
					`${path.relative(root, file)}: snippet must end at its final code character`,
				);
			}
		}
	}
	return {issues, checked, fixed};
};

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	try {
		const args = process.argv.slice(2);
		const result = await checkSnippets({
			fix: args.includes("--fix"),
			files: args.filter((arg) => arg !== "--fix" && arg !== "--"),
		});
		for (const issue of result.issues) {
			console.error(issue);
		}
		console.log(
			`Checked ${result.checked} snippet sources and documents; fixed ${result.fixed}.`,
		);
		if (result.issues.length) {
			process.exitCode = 1;
		}
	} catch (error) {
		console.error(error.message);
		process.exitCode = 1;
	}
}

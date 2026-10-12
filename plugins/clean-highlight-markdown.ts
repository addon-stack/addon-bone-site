import {readdir, readFile, writeFile} from "node:fs/promises";
import * as path from "node:path";
import type {RspressPlugin} from "@rspress/core";

const cleanHtmlHighlights = (markdown: string): string =>
	markdown.replace(
		/(^```html[^\n]*\n)([\s\S]*?)(^```[ \t]*$)/gm,
		(_block, opening: string, code: string, closing: string) =>
			opening +
			code.replace(/[ \t]+<!-- \[!code highlight\] -->[ \t]*$/gm, "") +
			closing,
	);

export const cleanHighlightMarkdown = (): RspressPlugin => ({
	name: "clean-highlight-markdown",
	async afterBuild(config, isProd) {
		if (!isProd) {
			return;
		}
		// Rspress exports Markdown without running Shiki transformers.
		const output = path.resolve(config.outDir ?? "dist");
		for (const file of await readdir(output, {recursive: true})) {
			if (!file.endsWith(".md") && !file.endsWith("llms-full.txt")) {
				continue;
			}
			const filename = path.join(output, file);
			const markdown = await readFile(filename, "utf8");
			const cleaned = cleanHtmlHighlights(markdown);
			if (cleaned !== markdown) {
				await writeFile(filename, cleaned);
			}
		}
	},
});

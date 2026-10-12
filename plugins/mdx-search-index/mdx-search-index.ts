import {readFile} from "node:fs/promises";
import path from "node:path";
import {createProcessor} from "@mdx-js/mdx";
import type {Header, PageIndexInfo, RspressPlugin} from "@rspress/core";
import type {Root, RootContent} from "mdast";

type Node = Root | RootContent;
type Element = Extract<Node, {type: "mdxJsxFlowElement" | "mdxJsxTextElement"}>;
type Expression = Extract<
	Node,
	{type: "mdxFlowExpression" | "mdxTextExpression"}
>;
type SearchData = Pick<PageIndexInfo, "content" | "toc">;
type SearchPage = SearchData & Pick<PageIndexInfo, "_filepath">;
type Options = {codeBlocks?: boolean; rootDir?: string};
type Replacement = {
	start: number;
	end: number;
	header?: Omit<Header, "charIndex">;
	value: string;
};

const parser = createProcessor();
const blockElements = new Set([
	"div",
	"p",
	"section",
	"article",
	"header",
	"footer",
	"blockquote",
	"ul",
	"ol",
	"li",
	"table",
	"tr",
	"details",
	"summary",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
]);

function literalValue(expression: Pick<Expression, "data">): unknown {
	const statement = expression.data?.estree?.body[0];
	if (
		statement?.type === "ExpressionStatement" &&
		statement.expression.type === "Literal"
	) {
		return statement.expression.value;
	}
	throw new Error(
		"Use literal values for searchable text; search does not execute JavaScript expressions.",
	);
}

function attributeValue(node: Element, name: string): unknown {
	const attribute = node.attributes.find(
		(item) => item.type === "mdxJsxAttribute" && item.name === name,
	);
	if (attribute?.type !== "mdxJsxAttribute") return undefined;
	if (typeof attribute.value === "object" && attribute.value !== null) {
		return literalValue(attribute.value);
	}
	return attribute.value;
}

function headingText(node: Node): string {
	switch (node.type) {
		case "text":
		case "inlineCode":
			return node.value;
		case "break":
			return " ";
		case "mdxFlowExpression":
		case "mdxTextExpression": {
			// MDX comments do not contribute visible text.
			if (node.data?.estree?.body.length === 0) return "";
			const value = literalValue(node);
			return typeof value === "string" || typeof value === "number"
				? String(value)
				: "";
		}
		case "mdxJsxFlowElement":
		case "mdxJsxTextElement":
			if (node.name && !/^[a-z][a-z0-9-]*$/.test(node.name)) {
				throw new Error(
					"Use static text or HTML formatting inside DocHeading, not another React component.",
				);
			}
			if (node.name === "br") return " ";
			break;
	}
	if ("children" in node) {
		const text = node.children.map(headingText).join("");
		return node.type === "paragraph" ? `${text} ` : text;
	}
	throw new Error(`Unsupported ${node.type} inside DocHeading.`);
}

function sourceRange(node: Node): {start: number; end: number} {
	const start = node.position?.start.offset;
	const end = node.position?.end.offset;
	if (start === undefined || end === undefined)
		throw new Error(`Missing ${node.type} source positions.`);
	return {start, end};
}

async function codeText(
	node: Extract<Node, {type: "code"}>,
	page: SearchPage,
	options: Options,
): Promise<string> {
	if (options.codeBlocks === false) return "";
	// Match Rspress 2.0.2's file-code-block syntax and path resolution.
	const fileEntry = node.meta
		?.split(" ")
		.find((item) => item.startsWith("file="));
	const file = fileEntry?.split("=")[1]?.replace(/["'`]/g, "");
	if (!file) return node.value;
	if (node.value.trim())
		throw new Error(`File code block ${file} must have empty content.`);
	const filename = file.startsWith("<root>/")
		? path.resolve(options.rootDir ?? process.cwd(), file.slice(7))
		: file.startsWith("./") || file.startsWith("../")
			? path.resolve(path.dirname(page._filepath), file)
			: undefined;
	if (!filename)
		throw new Error(
			`File code block ${file} must start with ./, ../ or <root>/.`,
		);
	return readFile(filename, "utf8");
}

async function collectReplacements(
	node: Node,
	replacements: Replacement[],
	page: SearchPage,
	options: Options,
): Promise<void> {
	if (
		(node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") &&
		node.name === "DocHeading"
	) {
		if (
			node.attributes.some(
				(attribute) => attribute.type === "mdxJsxExpressionAttribute",
			)
		) {
			throw new Error(
				"Use explicit id and level attributes on DocHeading instead of spread props.",
			);
		}
		const id = attributeValue(node, "id");
		const level = attributeValue(node, "level");
		const depth = level === undefined ? 1 : level;
		const text = node.children
			.map(headingText)
			.join("")
			.replace(/\s+/gu, " ")
			.trim();
		if (typeof id !== "string" || !id.trim()) {
			throw new Error(
				"DocHeading needs a static, non-empty id for its search link.",
			);
		}
		if (
			typeof depth !== "number" ||
			!Number.isInteger(depth) ||
			depth < 1 ||
			depth > 6
		) {
			throw new Error(
				"DocHeading level must be a literal integer from 1 to 6.",
			);
		}
		if (!text) throw new Error(`DocHeading #${id} has no searchable text.`);
		replacements.push({
			...sourceRange(node),
			header: {id, text, depth},
			value: `${"#".repeat(depth)} ${text}`,
		});
		return;
	}
	if (node.type === "code") {
		replacements.push({
			...sourceRange(node),
			value: await codeText(node, page, options),
		});
		return;
	}
	if (
		node.type === "mdxjsEsm" ||
		node.type === "definition" ||
		node.type === "image" ||
		node.type === "imageReference"
	) {
		replacements.push({...sourceRange(node), value: ""});
		return;
	}
	if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
		let value = "";
		if (node.data?.estree?.body.length) {
			try {
				const literal = literalValue(node);
				if (typeof literal === "string" || typeof literal === "number")
					value = String(literal);
			} catch {
				// Runtime expressions are not evaluated by the search indexer.
			}
		}
		replacements.push({...sourceRange(node), value});
		return;
	}
	if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
		const {start, end} = sourceRange(node);
		const separator =
			node.type === "mdxJsxFlowElement" || blockElements.has(node.name ?? "")
				? "\n\n"
				: "";
		if (["script", "style"].includes(node.name ?? "")) {
			replacements.push({start, end, value: separator});
			return;
		}
		// Only these props are known to render visible text. Never index arbitrary
		// props (paths, class names, styles, handlers, etc.) or execute components.
		const labelProp =
			node.name === "Tab"
				? "label"
				: node.name === "Details"
					? "title"
					: node.name === "PropertyBadge" && !node.children.length
						? "text"
						: undefined;
		const label = labelProp ? attributeValue(node, labelProp) : "";
		const visibleLabel =
			typeof label === "string" || typeof label === "number"
				? String(label)
				: "";
		const prefix = node.name === "br" ? " " : visibleLabel + separator;
		if (!node.children.length) {
			replacements.push({start, end, value: prefix});
			return;
		}
		replacements.push(
			{start, end: sourceRange(node.children[0]).start, value: prefix},
			{
				start: sourceRange(node.children[node.children.length - 1]).end,
				end,
				value: separator,
			},
		);
	}
	if (node.type === "link" || node.type === "linkReference") {
		const {start, end} = sourceRange(node);
		if (!node.children.length) {
			replacements.push({start, end, value: ""});
			return;
		}
		replacements.push(
			{start, end: sourceRange(node.children[0]).start, value: ""},
			{
				start: sourceRange(node.children[node.children.length - 1]).end,
				end,
				value: "",
			},
		);
	}
	if ("children" in node) {
		for (const child of node.children)
			await collectReplacements(child, replacements, page, options);
	}
}

/** Adapt Rspress 2.0.2's existing search text without rebuilding its Markdown index. */
export async function prepareMdxSearchData(
	page: SearchPage,
	options: Options = {},
): Promise<SearchData | undefined> {
	const replacements: Replacement[] = [];
	await collectReplacements(
		parser.parse(page.content),
		replacements,
		page,
		options,
	);
	if (!replacements.length) return undefined;
	replacements.sort((a, b) => a.start - b.start);

	const ids = new Set(page.toc.map((header) => header.id));
	const parts: string[] = [];
	const headings: Header[] = [];
	let cursor = 0;
	let delta = 0;
	for (const replacement of replacements) {
		if (replacement.start < cursor)
			throw new Error("Overlapping MDX search replacements.");
		parts.push(
			page.content.slice(cursor, replacement.start),
			replacement.value,
		);
		if (replacement.header) {
			if (ids.has(replacement.header.id))
				throw new Error(`Duplicate heading id: ${replacement.header.id}.`);
			ids.add(replacement.header.id);
			headings.push({
				...replacement.header,
				charIndex: replacement.start + delta,
			});
		}
		delta += replacement.value.length - (replacement.end - replacement.start);
		cursor = replacement.end;
	}
	parts.push(page.content.slice(cursor));
	for (const header of page.toc) {
		let shift = 0;
		for (const replacement of replacements) {
			if (replacement.end > header.charIndex) break;
			shift += replacement.value.length - (replacement.end - replacement.start);
		}
		headings.push({
			...header,
			charIndex:
				header.charIndex < 0 ? header.charIndex : header.charIndex + shift,
		});
	}
	headings.sort((a, b) => a.charIndex - b.charIndex);
	return {content: parts.join(""), toc: headings};
}

export function mdxSearchIndex(): RspressPlugin {
	const originals = new WeakMap<PageIndexInfo, SearchData>();
	let enabled = true;
	let codeBlocks = true;
	return {
		name: "mdx-search-index",
		config(config) {
			enabled = config.search !== false;
			codeBlocks =
				typeof config.search !== "object" || config.search.codeBlocks !== false;
			return config;
		},
		// Private Rspress hook: package.json pins 2.0.2 and the integration test
		// exercises its real serialization order. Recheck both when upgrading.
		// In 2.0.2 Rspress regenerates this index on build/server startup, not
		// Markdown HMR. Restart the dev server to test edited search content.
		async modifySearchIndexData(pages) {
			if (!enabled) return;
			for (const page of pages) {
				try {
					const indexed = await prepareMdxSearchData(page, {codeBlocks});
					if (!indexed) continue;
					originals.set(page, {content: page.content, toc: page.toc});
					Object.assign(page, indexed);
				} catch (error) {
					throw new Error(
						`[mdx-search-index] ${page._filepath}: ${error instanceof Error ? error.message : String(error)}`,
					);
				}
			}
		},
		// Rspress serializes search JSON before this hook, then emits page data.
		// Restore navigation metadata so toc={false} also stays hidden during SSR.
		extendPageData(page) {
			const original = originals.get(page);
			if (original) {
				Object.assign(page, original);
				originals.delete(page);
			}
		},
	};
}

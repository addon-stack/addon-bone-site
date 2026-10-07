import assert from "node:assert/strict";
import {mkdir, mkdtemp, readFile, rm, writeFile} from "node:fs/promises";
import {createRequire} from "node:module";
import {tmpdir} from "node:os";
import path from "node:path";
import test from "node:test";
import {pathToFileURL} from "node:url";
import type {PageIndexInfo} from "@rspress/core";

import {mdxSearchIndex} from "./index.ts";
import {prepareMdxSearchData} from "./mdx-search-index.ts";

const indexContent = (page: Pick<PageIndexInfo, "content" | "toc">) =>
	prepareMdxSearchData({...page, _filepath: "/docs/test.mdx"});

test("indexes formatted headings, preserves example text, and shifts subsequent Markdown anchors", async () => {
	const content = [
		"## Options",
		"Introduction.",
		'<DocHeading\n level={3}\n id="service-options"\n toc={false}\n>Service <code>Options</code></DocHeading>',
		"Service details.",
		'<DocHeading level={3} id="other">Other &amp; more</DocHeading>',
		'```mdx\n<DocHeading id="example">Example</DocHeading>\n```',
		'Inline example: `<DocHeading id="inline">Example</DocHeading>`.',
		"## Following",
		"More details.",
	].join("\n\n");
	const toc = [
		{id: "options", text: "Options", depth: 2, charIndex: 0},
		{
			id: "following",
			text: "Following",
			depth: 2,
			charIndex: content.indexOf("## Following"),
		},
	];
	const indexed = await indexContent({content, toc});
	assert.ok(indexed);
	assert.deepEqual(
		indexed.toc.map(({id}) => id),
		["options", "service-options", "other", "following"],
	);
	assert.equal(indexed.toc[1].text, "Service Options");
	assert.equal(indexed.toc[2].text, "Other & more");
	for (const header of indexed.toc) {
		assert.ok(
			indexed.content
				.slice(header.charIndex)
				.startsWith(`${"#".repeat(header.depth)} ${header.text}`),
		);
	}
	assert.ok(
		indexed.content.includes('<DocHeading id="example">Example</DocHeading>'),
	);
	assert.ok(
		indexed.content.includes('`<DocHeading id="inline">Example</DocHeading>`'),
	);
	assert.equal(toc[1].charIndex, content.indexOf("## Following"));
	assert.ok(!indexed.content.includes("```"));
});

test("supports literal JSX values, Unicode, comments and inline formatting", async () => {
	const indexed = await indexContent({
		content:
			'<DocHeading level={4} id={"русский-якорь"} toc={false}>Опции <strong>Service</strong>{" "}{2}{/* note */}<br />API</DocHeading>',
		toc: [],
	});
	assert.deepEqual(indexed?.toc, [
		{id: "русский-якорь", text: "Опции Service 2 API", depth: 4, charIndex: 0},
	]);
});

test("leaves ordinary Markdown and inline code examples unchanged", async () => {
	for (const content of [
		"## Normal",
		'`<DocHeading id="example">Example</DocHeading>`',
	]) {
		assert.equal(await indexContent({content, toc: []}), undefined);
	}
});

test("rejects ambiguous anchors and dynamic headings instead of guessing their runtime value", async () => {
	for (const content of [
		"<DocHeading level={3}>Missing id</DocHeading>",
		'<DocHeading id="dynamic" level={level}>Dynamic</DocHeading>',
		'<DocHeading id="dynamic">{getTitle()}</DocHeading>',
		'<DocHeading id="dynamic"><Title /></DocHeading>',
		"<DocHeading {...props}>Spread</DocHeading>",
		'<DocHeading id="invalid" level={7}>Invalid</DocHeading>',
		'<DocHeading id="invalid" level={null}>Invalid</DocHeading>',
		'<DocHeading id="empty"></DocHeading>',
		'<DocHeading id="same">First</DocHeading>\n\n<DocHeading id="same">Second</DocHeading>',
	]) {
		await assert.rejects(indexContent({content, toc: []}));
	}
});

test("can disable the adapter with the site's search setting", async () => {
	const plugin = mdxSearchIndex();
	const page = {
		content: '<DocHeading id="item">Item</DocHeading>',
		toc: [],
	} as unknown as PageIndexInfo;
	await plugin.config?.(
		{search: false},
		{addPlugin() {}, removePlugin() {}},
		false,
	);
	await plugin.modifySearchIndexData?.([page], false);
	assert.ok(page.content.includes("<DocHeading"));
});

test("unwraps nested components and HTML without dropping prose, labels or section context", async () => {
	const content = [
		"## Before",
		'<Tabs groupId="internal-tabs"><Tab label={"Service source"}>',
		'<Details title="More details">',
		'<DocHeading level={3} id="nested" toc={false}>Nested <code>API</code></DocHeading>',
		'Useful <strong className="internal-class">bold</strong> and <span>inline</span> text.<br />Next line.',
		'<PropertyBadge text="primary" type="info" />',
		'<PropertyBadge text="unused">Child label</PropertyBadge>',
		'{"Literal text"}{/* internal comment */}{2}{false}',
		'</Details></Tab><Tab label="Another example">',
		'```tsx title="internal-title"\nconst element = <span>Real example</span>;\n```',
		"</Tab></Tabs>",
		'<span id="anchor-only" />',
		'<UnknownComponent internal="secret-prop">Kept children</UnknownComponent>',
		"<div><p>First block</p><p>Second block</p></div>",
		'<div>Read [the guide](https://internal.example/secret) and <a href="/internal-url">this link</a>.</div>',
		"{getRuntimeValue()}",
		"## Following",
		"Afterwards.",
	].join("\n\n");
	const indexed = await indexContent({
		content,
		toc: [
			{id: "before", text: "Before", depth: 2, charIndex: 0},
			{
				id: "following",
				text: "Following",
				depth: 2,
				charIndex: content.indexOf("## Following"),
			},
		],
	});
	assert.ok(indexed);
	assert.match(indexed.content, /First block\s+Second block/);
	assert.ok(indexed.content.includes("Read the guide and this link."));
	for (const text of [
		"Service source",
		"More details",
		"Nested API",
		"Useful bold and inline text. Next line.",
		"primary",
		"Child label",
		"Literal text2",
		"Another example",
		"Kept children",
		"Afterwards.",
		"const element = <span>Real example</span>;",
	]) {
		assert.ok(indexed.content.includes(text), `Missing visible text: ${text}`);
	}
	assert.doesNotMatch(
		indexed.content,
		/<\/?(?:Tabs?|Details|DocHeading|PropertyBadge|UnknownComponent)|internal-|secret-prop|anchor-only|getRuntimeValue|unused|```/,
	);
	assert.deepEqual(
		indexed.toc.map(({id}) => id),
		["before", "nested", "following"],
	);
	for (const heading of indexed.toc)
		assert.ok(
			indexed.content
				.slice(heading.charIndex)
				.startsWith(`${"#".repeat(heading.depth)} ${heading.text}`),
		);
});

test("loads relative and project-root examples, honors codeBlocks, and reports missing files", async () => {
	const root = await mkdtemp(path.join(tmpdir(), "mdx-search-code-"));
	try {
		await mkdir(path.join(root, "docs"));
		await writeFile(
			path.join(root, "example.ts"),
			"export const externalSearchProbe = 42;",
		);
		const page = {
			_filepath: path.join(root, "docs/page.mdx"),
			content: [
				'<Tabs><Tab label="Example">',
				'```ts file="../example.ts" title="src/example.ts"\n```',
				"</Tab></Tabs>",
				'```ts file="<root>/example.ts"\n```',
				"```tsx\nconst inlineSearchProbe = <span>Example</span>;\n```",
				"Keep `inlineCodeProbe` and prose.",
			].join("\n\n"),
			toc: [],
		};
		const indexed = await prepareMdxSearchData(page, {rootDir: root});
		assert.ok(indexed);
		assert.equal(indexed?.content.match(/externalSearchProbe/g)?.length, 2);
		assert.ok(indexed?.content.includes("inlineSearchProbe"));
		assert.doesNotMatch(indexed.content, /```|file=|title=|example\.ts|<Tab/);
		const withoutCode = await prepareMdxSearchData(page, {codeBlocks: false});
		assert.ok(withoutCode);
		assert.doesNotMatch(withoutCode.content, /SearchProbe|```|file=|<Tab/);
		assert.ok(withoutCode?.content.includes("Example"));
		assert.ok(withoutCode?.content.includes("inlineCodeProbe"));
		const missing = {...page, content: '```ts file="./missing.ts"\n```'};
		await assert.rejects(prepareMdxSearchData(missing), /missing\.ts/);
		assert.ok(await prepareMdxSearchData(missing, {codeBlocks: false}));
		await assert.rejects(
			prepareMdxSearchData({
				...page,
				content: '```ts file="../example.ts"\nnot empty\n```',
			}),
			/empty content/,
		);
	} finally {
		await rm(root, {recursive: true, force: true});
	}
});

test("Rspress serializes the search headings before restoring page navigation, including on rebuild", async () => {
	const require = createRequire(import.meta.url);
	const packageFile = require.resolve("@rspress/core/package.json");
	const corePackage = JSON.parse(await readFile(packageFile, "utf8"));
	assert.equal(
		corePackage.version,
		"2.0.2",
		"Revalidate the private search hook and content format before upgrading Rspress.",
	);
	const moduleURL = pathToFileURL(
		path.join(
			path.dirname(packageFile),
			"dist/node/runtimeModule/pageData/createPageData.js",
		),
	);
	const {createPageData} = await import(moduleURL.href);
	const root = await mkdtemp(path.join(tmpdir(), "mdx-search-index-"));
	const plugin = mdxSearchIndex();
	const routes = ["en", "ru"].map((lang) => ({
		absolutePath: path.join(root, `${lang}.mdx`),
		routePath: `/${lang}/service`,
		lang,
		version: "",
	}));
	try {
		for (const {isProd, codeBlocks} of [
			{isProd: false, codeBlocks: true},
			{isProd: true, codeBlocks: true},
			{isProd: false, codeBlocks: false},
			{isProd: true, codeBlocks: false},
		]) {
			const config = {search: {codeBlocks}};
			await plugin.config?.(
				config,
				{addPlugin() {}, removePlugin() {}},
				isProd,
			);
			await writeFile(
				path.join(root, "example.ts"),
				`export const externalSearchProbe = ${isProd};`,
			);
			const fragment = path.join(root, "fragment.mdx");
			await writeFile(
				fragment,
				`<DocHeading level={3} id="fragment" toc={false}>Fragment ${isProd}</DocHeading>`,
			);
			for (const route of routes) {
				const text = route.lang === "en" ? "Service Options" : "Опции Service";
				await writeFile(
					route.absolutePath,
					[
						'import Fragment from "./fragment.mdx";',
						"# Service",
						"## Options",
						`<DocHeading level={3} id="service-options" toc={false}>${text}</DocHeading>`,
						"Some details.",
						'<Tabs><Tab label="Service source">',
						'```ts file="./example.ts" title="src/example.ts"\n```',
						"Visible text inside a tab.",
						"</Tab></Tabs>",
						'```ts file="./example.ts"\n```',
						"<Fragment />",
						"## Following",
						"Some more details.",
					].join("\n\n"),
				);
			}
			const result = await createPageData({
				config,
				alias: {},
				userDocRoot: root,
				routeService: {
					getRoutes: () => routes,
					getRoutePageByRoutePath: () => undefined,
				},
				pluginDriver: {
					modifySearchIndexData: (pages: PageIndexInfo[]) =>
						plugin.modifySearchIndexData?.(pages, isProd),
					extendPageData: (page: PageIndexInfo) =>
						plugin.extendPageData?.(page, isProd),
				},
			});
			assert.equal(Object.keys(result.searchIndex).length, 2);
			for (const json of Object.values(result.searchIndex)) {
				const [page] = JSON.parse(json as string) as PageIndexInfo[];
				assert.deepEqual(
					page.toc.map(({id}) => id),
					["options", "service-options", "fragment", "following"],
				);
				assert.equal(
					page.toc[1].text,
					page.lang === "en" ? "Service Options" : "Опции Service",
				);
				assert.equal(page.toc[2].text, `Fragment ${isProd}`);
				assert.ok(!page.content.includes("<DocHeading"));
				assert.doesNotMatch(page.content, /<Tab|file=|title=|```/);
				assert.ok(page.content.includes("Service source"));
				assert.ok(page.content.includes("Visible text inside a tab."));
				assert.equal(
					page.content.includes(
						`export const externalSearchProbe = ${isProd};`,
					),
					codeBlocks,
				);
				for (const header of page.toc) {
					assert.ok(
						page.content
							.slice(header.charIndex)
							.startsWith(`${"#".repeat(header.depth)} ${header.text}`),
					);
				}
			}
			for (const page of result.pageData.pages as PageIndexInfo[]) {
				assert.deepEqual(
					page.toc.map(({id}) => id),
					["options", "following"],
				);
				assert.equal(page.content, undefined);
			}
		}
	} finally {
		await rm(root, {recursive: true, force: true});
	}
});

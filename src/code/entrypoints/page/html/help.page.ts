import {definePage} from "adnbn";

export default definePage({
	title: "Help",
	links: "page.css",
	scripts: {path: "page-extra.js", attributes: {defer: true}},
	metas: [
		{attributes: {name: "description", content: "Extension help"}},
		{attributes: {name: "color-scheme", content: "light dark"}},
	],
	render: "Welcome! This is your extension's help page.",
});
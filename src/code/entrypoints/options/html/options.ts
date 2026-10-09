import {defineOptions} from "adnbn";

export default defineOptions({
	title: "Settings",
	links: "page.css",
	scripts: {path: "options-extra.js", attributes: {defer: true}},
	metas: [
		{
			attributes: {
				name: "description",
				content: "Your extension settings page",
			},
		},
		{attributes: {name: "color-scheme", content: "light dark"}},
	],
	render: "Welcome to your settings page.",
});
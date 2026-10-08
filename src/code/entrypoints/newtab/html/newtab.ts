import {defineNewtab} from "adnbn";

export default defineNewtab({
	title: "Start",
	links: "page.css",
	scripts: {path: "newtab-extra.js", attributes: {defer: true}},
	metas: [
		{attributes: {name: "description", content: "Your extension start page"}},
		{attributes: {name: "color-scheme", content: "light dark"}},
	],
	render: "Welcome to your start page.",
});
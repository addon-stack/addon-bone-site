import {definePage} from "adnbn";

export default definePage({
	title: "Help",
	tags: ["page.css", {path: "page-extra.js", attributes: {defer: true}}],
	render: "Welcome! This is your extension's help page.",
});
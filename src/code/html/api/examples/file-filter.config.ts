import {defineConfig} from "adnbn";

export default defineConfig({
	html: {
		files: "preview.html",
		metas: {attributes: {name: "application-name", content: "Preview"}},
	},
});
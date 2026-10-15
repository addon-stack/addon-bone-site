import {defineConfig} from "adnbn";

export default defineConfig({
	html: {
		files: "preview.html",
		links: {path: "assets/print.css", sourcePath: "assets/print.css"},
		publicPath: "/",
		hash: "v1",
	},
});
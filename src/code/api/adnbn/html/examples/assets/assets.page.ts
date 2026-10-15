import {definePage} from "adnbn";

export default definePage({
	links: {
		path: "assets/print.css",
		sourcePath: "assets/print.css",
		attributes: {media: "print"},
	},
	scripts: {
		path: "assets/init.js",
		sourcePath: "assets/init.js",
		append: false,
	},
});
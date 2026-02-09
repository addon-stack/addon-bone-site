import * as path from "node:path";
import {defineConfig} from "@rspress/core";

export default defineConfig({
	root: path.join(__dirname, "src"),
	outDir: "dist",
	title: "Addon Bone",
	icon: "/favicon.png",
	logo: {
		light: "/logo-light.svg",
		dark: "/logo-dark.svg",
	},
	lang: "en",
	globalStyles: path.join(__dirname, "src", "styles.css"),
	locales: [
		{
			lang: "en",
			label: "English",
		},
	],
	themeConfig: {
		locales: [
			{
				lang: "en",
				label: "English",
			},
		],
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/addon-stack/addon-bone",
			},
			{
				icon: "npm",
				mode: "link",
				content: "https://www.npmjs.com/~addon-stack",
			},
		],
	},
});

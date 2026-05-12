import * as path from "node:path";
import {pluginSass as sass} from "@rsbuild/plugin-sass";
import {defineConfig} from "@rspress/core";

import fileTree from "rspress-plugin-file-tree";

export default defineConfig({
	root: path.join(__dirname, "src"),
	llms: true,
	route: {
		exclude: ["components/**", "en/components/**", "code/**"],
	},
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
		llmsUI: true,
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
				content: "https://www.npmjs.com/package/adnbn",
			},
		],
	},
	plugins: [fileTree()],
	builderConfig: {
		plugins: [sass()],
		output: {
			cssModules: {
				auto: /src\/components\/.*\.scss$/i,
			},
		},
		resolve: {
			alias: {
				"@components": path.join(__dirname, "src/components"),
				"@en": path.join(__dirname, "src/en"),
			},
		},
	},
});

import * as path from "node:path";
import {defineConfig} from "@rspress/core";
import {pluginSass as sass} from "@rsbuild/plugin-sass";

import fileTree from "rspress-plugin-file-tree";

export default defineConfig({
	root: path.join(__dirname, "src"),
	route: {
		exclude: ["components/**", "en/components/**"],
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
				content: "https://www.npmjs.com/~addon-stack",
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
			},
		},
	},
});

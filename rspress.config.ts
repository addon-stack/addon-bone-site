import * as path from "node:path";
import {pathToFileURL} from "node:url";
import {pluginSass as sass} from "@rsbuild/plugin-sass";
import {defineConfig} from "@rspress/core";

import fileTree from "rspress-plugin-file-tree";

export default defineConfig({
	root: path.join(__dirname, "src/docs"),
	llms: true,
	route: {
		exclude: ["*/components/**", "**/entrypoints/fragments/**"],
	},
	outDir: "dist",
	title: "Addon Bone",
	icon: pathToFileURL(path.join(__dirname, "src/public/favicon.png")).href,
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
		{
			lang: "ru",
			label: "Русский",
		},
	],
	themeConfig: {
		llmsUI: true,
		locales: [
			{
				lang: "en",
				label: "English",
			},
			{
				lang: "ru",
				label: "Русский",
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
		server: {
			publicDir: {
				name: path.join(__dirname, "src/public"),
			},
		},
		output: {
			cssModules: {
				auto: /src\/components\/.*\.scss$/i,
			},
		},
		resolve: {
			alias: {
				"@components": path.join(__dirname, "src/components"),
				"@en": path.join(__dirname, "src/docs/en"),
				"@ru": path.join(__dirname, "src/docs/ru"),
			},
		},
	},
});

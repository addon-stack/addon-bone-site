import {defineConfig} from "adnbn";

export default defineConfig({
	jsFilename: "[app]-[name].[contenthash:8].js",
	cssFilename: "[app]-[name].[contenthash:8].css",
	assetsFilename: "[name].[contenthash:8][ext]",
});
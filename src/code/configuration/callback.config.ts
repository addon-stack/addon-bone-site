import {Browser, defineConfig} from "adnbn";

export default defineConfig((config) => ({
	name:
		config.browser === Browser.Firefox
			? "Reading List for Firefox"
			: "Reading List",
	version: "1.2.0",
}));
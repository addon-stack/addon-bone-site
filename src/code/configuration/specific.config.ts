import {Browser, defineConfig} from "adnbn";

export default defineConfig({
	browser: Browser.Firefox,
	specific: {
		gecko: {
			id: "reading-list@example.com",
			strictMinVersion: "120.0",
		},
	},
});
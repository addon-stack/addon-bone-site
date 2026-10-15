import {defineConfig} from "adnbn";

export default defineConfig({
	manifest(builder) {
		builder
			.appendPermissions(new Set(["storage", "tabs"]))
			.addOptionalPermission("bookmarks")
			.addHostPermission("https://example.com/*");

		return undefined;
	},
});
import {defineConfig} from "adnbn";

export default defineConfig({
	manifest(builder) {
		builder.addAccessibleResource({
			resources: ["images/marker.png"],
			matches: ["https://example.com/*"],
		});

		return undefined;
	},
});
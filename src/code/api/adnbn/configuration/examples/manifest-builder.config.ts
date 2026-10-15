import {defineConfig} from "adnbn";

export default defineConfig({
	manifest(builder) {
		builder.addPermission("storage");

		return {
			version_name: "1.2 beta",
		};
	},
});
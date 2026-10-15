import {defineConfig} from "adnbn";

export default defineConfig({
	manifest(builder) {
		builder.raw({version_name: "1.2 beta"});

		return undefined;
	},
});
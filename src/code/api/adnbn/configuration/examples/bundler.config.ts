import {defineConfig} from "adnbn";

export default defineConfig({
	bundler: (rspack) => ({
		performance: {
			hints: rspack.mode === "production" ? "warning" : false,
		},
	}),
});
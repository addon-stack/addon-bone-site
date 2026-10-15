import {defineConfig} from "adnbn";

export default defineConfig({
	env: (name) => name.startsWith("PUBLIC_") || name === "FEATURE_READER",
});
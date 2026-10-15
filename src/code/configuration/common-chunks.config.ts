import {defineConfig} from "adnbn";

export default defineConfig({
	commonChunks: (names) => {
		const entries = [...names].toSorted();
		return entries.length > 0 ? `${entries.join("-")}.shared` : undefined;
	},
});
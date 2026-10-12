import {defineBackground, getOffscreen} from "adnbn";

export default defineBackground({
	async main() {
		const parser = getOffscreen("parser");

		try {
			console.log(await parser.title("<title>Addon Bone</title>"));
		} catch (error) {
			console.error("Unable to read the document title", error);
		}
	},
});
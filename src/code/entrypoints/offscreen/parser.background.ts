import {defineBackground, getOffscreen} from "adnbn";

export default defineBackground({
	async main() {
		const parser = getOffscreen("parser");
		const title = await parser.title("<title>Addon Bone</title>");

		console.log(title);
	},
});
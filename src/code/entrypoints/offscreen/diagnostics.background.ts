import {defineBackground, getOffscreen} from "adnbn";

export default defineBackground({
	async main() {
		const diagnostics = getOffscreen("diagnostics");

		console.log(await diagnostics.version());
		console.log(await diagnostics.html.title("<title>Addon Bone</title>"));
	},
});
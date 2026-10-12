import {defineBackground, getOffscreen} from "adnbn";

export default defineBackground({
	async main() {
		const caller = getOffscreen("caller");

		console.log(await caller.callerUrl());
	},
});
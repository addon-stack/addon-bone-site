import {defineBackground} from "adnbn";
import {getService} from "adnbn/service";

export default defineBackground({
	async main() {
		const tabs = getService("tabs");
		console.log(await tabs.list());
	},
});
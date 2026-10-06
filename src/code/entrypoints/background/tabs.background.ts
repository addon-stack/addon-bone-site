import {defineBackground} from "adnbn";
import {queryTabs} from "adnbn/browser";

export default defineBackground({
	permissions: ["tabs"],
	async main() {
		const tabs = await queryTabs();
		console.log(tabs.map((tab) => tab.title ?? "Untitled tab"));
	},
});
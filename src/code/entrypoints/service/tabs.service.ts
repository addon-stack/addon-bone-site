import {defineService} from "adnbn";
import {queryTabs} from "adnbn/browser";

export default defineService({
	permissions: ["tabs"],
	init() {
		return {
			async list(): Promise<string[]> {
				const tabs = await queryTabs();
				return tabs.map((tab) => tab.title ?? "Untitled tab");
			},
		};
	},
});

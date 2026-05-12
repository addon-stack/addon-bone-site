import {defineCommand} from "adnbn";

export default defineCommand({
	name: "open-dashboard",
	defaultKey: "Ctrl+Shift+Y",
	permissions: ["tabs"],
	async execute(tab) {
		console.log("Open dashboard from", tab?.url);
	},
});

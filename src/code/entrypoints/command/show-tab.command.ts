import {defineCommand} from "adnbn";

export default defineCommand({
	name: "show-tab",
	description: "Show current tab",
	defaultKey: "Ctrl+Shift+Y",
	execute(tab) {
		console.log("Current tab", tab?.id);
	},
});

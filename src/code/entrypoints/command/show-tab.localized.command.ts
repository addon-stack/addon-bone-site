import {defineCommand} from "adnbn";

export default defineCommand({
	description: "@commands.showTab",
	defaultKey: "Ctrl+Shift+Y",
	execute(tab) {
		console.log("Current tab", tab?.id);
	},
});

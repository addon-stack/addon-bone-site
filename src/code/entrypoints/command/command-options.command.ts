import {defineCommand} from "adnbn";

export default defineCommand({
	defaultKey: "Ctrl+Shift+Y",
	execute(tab, options) {
		console.log("Command", options.name);
		console.log("Current tab", tab?.id);
	},
});
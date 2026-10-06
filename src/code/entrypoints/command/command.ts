import {defineCommand} from "adnbn";

export default defineCommand({
	defaultKey: "Ctrl+Shift+Y",
	execute(tab) {
		console.log("Command executed", tab);
	},
});
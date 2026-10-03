import {defineExecuteActionCommand} from "adnbn";

export default defineExecuteActionCommand({
	defaultKey: "Ctrl+Shift+U",
	execute(tab) {
		console.log("Action command executed", tab);
	},
});

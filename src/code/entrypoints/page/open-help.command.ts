import {defineCommand, getPageUrl} from "adnbn";
import {createTab} from "adnbn/browser";

export default defineCommand({
	defaultKey: "Ctrl+Shift+Y",
	async execute() {
		await createTab({url: getPageUrl("help")});
	},
});
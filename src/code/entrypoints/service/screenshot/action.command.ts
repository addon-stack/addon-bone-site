import {defineExecuteActionCommand} from "adnbn";
import {getService} from "adnbn/service";

export default defineExecuteActionCommand({
	defaultKey: "Ctrl+Shift+Y",

	async execute(tab) {
		const screenshot = getService("screenshot");

		await screenshot.capture(tab.windowId);
	},
});

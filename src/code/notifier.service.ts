import {defineService} from "adnbn";
import {createNotification} from "adnbn/browser";

export default defineService({
	permissions: ["notifications"],

	init() {
		return {
			notify(message: string): Promise<string> {
				return createNotification({
					type: "basic",
					title: "Example Extension",
					message,
					iconUrl: "/icon-128.png",
				});
			},
		};
	},
});

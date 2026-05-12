import {defineService} from "adnbn";

export default defineService({
	permissions: ["storage"],
	hostPermissions: ["*://*.example.com/*"],
	init() {
		return {
			ping(): string {
				return "pong";
			},
		};
	},
});

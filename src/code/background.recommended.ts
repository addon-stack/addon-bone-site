import {defineBackground} from "adnbn";

export default defineBackground({
	permissions: ["storage"],
	hostPermissions: ["*://*.example.com/*"],
	main(options) {
		console.log("Background started", options);
	},
});

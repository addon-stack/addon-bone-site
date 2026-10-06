import {onInstalled} from "adnbn/browser";

onInstalled((details) => {
	if (details.reason === "install") {
		console.log("Extension installed for the first time");
	}

	if (details.reason === "update") {
		console.log("Extension updated from version", details.previousVersion);
	}
});

export {};
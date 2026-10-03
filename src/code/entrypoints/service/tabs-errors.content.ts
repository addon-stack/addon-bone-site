import {getService} from "adnbn";

try {
	const tabs = getService("tabs");
	console.log(await tabs.list());
} catch (error) {
	console.error("Could not load tabs", error);
}

export {};

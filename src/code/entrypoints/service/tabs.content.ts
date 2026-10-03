import {defineContentScript, getService} from "adnbn";

const tabs = getService("tabs");

export default defineContentScript({
	matches: ["http://*/*", "https://*/*"],
	container: "pre",
	prepare: () => tabs.list(),
	render: ({data}) => `Open tabs:\n${data.join("\n")}`,
});

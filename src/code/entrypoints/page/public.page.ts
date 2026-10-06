import {definePage} from "adnbn";

export default definePage({
	name: "help",
	matches: ["https://example.com/*"],
	render: "Welcome! This is your extension's help page.",
});
import {definePage, getPageUrl} from "adnbn";

export default definePage({
	render() {
		const link = document.createElement("a");

		link.href = getPageUrl("help");
		link.textContent = "Open help";

		return link;
	},
});
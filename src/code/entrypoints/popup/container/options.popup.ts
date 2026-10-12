import {definePopup} from "adnbn";

export default definePopup({
	title: "Quick actions",
	container: {
		tagName: "main",
		className: "popup-content",
	},
	render({title = "Quick actions"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
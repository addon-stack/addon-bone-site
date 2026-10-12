import {definePopup} from "adnbn";

export default definePopup({
	title: "Quick actions",
	container({title = "Quick actions"}) {
		const main = document.createElement("main");
		main.className = "popup-content";
		main.setAttribute("aria-label", title);
		return main;
	},
	render({title = "Quick actions"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
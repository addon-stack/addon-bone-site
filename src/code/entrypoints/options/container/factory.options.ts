import {defineOptions} from "adnbn";

export default defineOptions({
	title: "Settings",
	container({title = "Settings"}) {
		const main = document.createElement("main");
		main.className = "settings-page";
		main.setAttribute("aria-label", title);
		return main;
	},
	render({title = "Settings"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
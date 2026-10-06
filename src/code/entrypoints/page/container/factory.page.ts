import {definePage} from "adnbn";

export default definePage({
	title: "Extension help",
	container({title = "Extension help"}) {
		const main = document.createElement("main");
		main.className = "help-page";
		main.setAttribute("aria-label", title);
		return main;
	},
	render({title = "Extension help"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
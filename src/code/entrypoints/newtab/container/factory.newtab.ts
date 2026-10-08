import {defineNewtab} from "adnbn";

export default defineNewtab({
	title: "Start",
	container({title = "Start"}) {
		const main = document.createElement("main");
		main.className = "start-page";
		main.setAttribute("aria-label", title);
		return main;
	},
	render({title = "Start"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
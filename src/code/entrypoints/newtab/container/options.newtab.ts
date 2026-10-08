import {defineNewtab} from "adnbn";

export default defineNewtab({
	title: "Start",
	container: {tagName: "main", className: "start-page"},
	render({title = "Start"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
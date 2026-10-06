import {definePage} from "adnbn";

export default definePage({
	title: "Extension help",
	container: {tagName: "main", className: "help-page"},
	render({title = "Extension help"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
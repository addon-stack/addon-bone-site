import {defineOptions} from "adnbn";

export default defineOptions({
	title: "Settings",
	container: {tagName: "main", className: "settings-page"},
	render({title = "Settings"}) {
		const heading = document.createElement("h1");
		heading.textContent = title;
		return heading;
	},
});
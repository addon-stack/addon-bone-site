import {definePopup} from "adnbn";

export default definePopup({
	title: "Quick actions",
	template: "./popup.html",
	container: "main",
	render: "Your extension is ready.",
});
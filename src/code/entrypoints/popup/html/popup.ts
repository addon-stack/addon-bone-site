import {definePopup} from "adnbn";

export default definePopup({
	title: "Quick actions",
	links: "page.css",
	scripts: {
		path: "popup-extra.js",
		attributes: {defer: true},
	},
	metas: [
		{
			attributes: {
				name: "description",
				content: "Quick actions for the current tab",
			},
		},
		{
			attributes: {
				name: "color-scheme",
				content: "light dark",
			},
		},
	],
	render: "Your extension is ready.",
});
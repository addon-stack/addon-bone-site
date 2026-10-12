import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	title: "Report preview",
	reasons: OffscreenReason.DOMParser,
	justification: "Parse HTML stored in the hidden document.",
	container: {
		tagName: "section",
		className: "offscreen-content",
	},
	init: () => ({
		title(): string {
			const html =
				document.querySelector(".offscreen-content")?.textContent ?? "";

			return new DOMParser().parseFromString(html, "text/html").title;
		},
	}),
	render: ({title = "Report preview"}) => {
		return `<title>${title}</title>`;
	},
});
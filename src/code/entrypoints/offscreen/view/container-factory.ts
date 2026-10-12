import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	title: "Report preview",
	reasons: OffscreenReason.DOMParser,
	justification: "Parse HTML stored in the hidden document.",
	container: ({title = "Report preview"}) => {
		const section = document.createElement("section");
		section.className = "offscreen-content";
		section.setAttribute("data-document", title);

		return section;
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
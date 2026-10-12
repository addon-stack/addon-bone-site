import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.DOMParser,
	justification: "Read a heading from a local HTML template.",
	template: "./template.html",
	init: () => ({
		title(): string {
			const source = document.querySelector<HTMLTemplateElement>("#report");
			const report = new DOMParser().parseFromString(
				source?.innerHTML ?? "",
				"text/html",
			);

			return report.querySelector("h1")?.textContent ?? "";
		},
	}),
});
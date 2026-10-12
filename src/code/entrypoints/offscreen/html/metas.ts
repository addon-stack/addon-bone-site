import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	title: "HTML parser",
	reasons: OffscreenReason.DOMParser,
	justification: "Read the title of an HTML document with DOMParser.",
	metas: {
		attributes: {
			name: "referrer",
			content: "no-referrer",
		},
	},
	init: () => ({
		title(html: string): string {
			return new DOMParser().parseFromString(html, "text/html").title;
		},
	}),
});
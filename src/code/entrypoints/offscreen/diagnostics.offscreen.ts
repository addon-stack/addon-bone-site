import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.DOMParser,
	justification: "Parse HTML in a hidden document.",

	init() {
		return {
			version: "1.0.0",
			html: {
				title(source: string): string {
					return new DOMParser().parseFromString(source, "text/html").title;
				},
			},
		};
	},
});
import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.DOMParser,
	justification: "Read the title of an HTML document with DOMParser.",

	init() {
		return {
			title(html: string): string {
				return new DOMParser().parseFromString(html, "text/html").title;
			},
		};
	},

	main(parser) {
		console.log(parser.title("<title>Addon Bone</title>"));
	},
});
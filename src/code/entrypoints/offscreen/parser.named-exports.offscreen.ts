import {OffscreenReason} from "adnbn";

export const reasons = OffscreenReason.DOMParser;
export const justification =
	"Read the title of an HTML document with DOMParser.";

export default () => ({
	title(html: string): string {
		return new DOMParser().parseFromString(html, "text/html").title;
	},
});
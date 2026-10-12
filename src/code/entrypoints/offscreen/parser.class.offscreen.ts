import {defineOffscreen, OffscreenReason} from "adnbn";

class HtmlParser {
	title(html: string): string {
		return this._parse(html).title;
	}

	_parse(html: string): Document {
		return new DOMParser().parseFromString(html, "text/html");
	}
}

export default defineOffscreen({
	reasons: OffscreenReason.DOMParser,
	justification: "Read the title of an HTML document with DOMParser.",

	init() {
		return new HtmlParser();
	},
});
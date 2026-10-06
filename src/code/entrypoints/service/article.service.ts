import {defineService} from "adnbn";

import {ArticleParser, type ArticleSnapshot} from "@acme/article-parser";

class ArticleService {
	constructor(private readonly parser: ArticleParser) {}

	/** @returns {Promise<import("@acme/article-parser").ArticleSnapshot>} */
	parse(html: string): Promise<ArticleSnapshot> {
		return this.parser.parse(html);
	}
}

export default defineService({
	init() {
		return new ArticleService(new ArticleParser());
	},
});
import {defineService} from "adnbn";
import {executeScript} from "adnbn/browser";
import type {MessageSender, MessageSenderAware} from "adnbn/message";

import type {ArticleService, ArticleSnapshot} from "../types/article";

class ArticleMv3Service implements ArticleService, MessageSenderAware {
	declare readonly $sender?: MessageSender;

	async parse(): Promise<ArticleSnapshot> {
		const tabId = this.$sender?.tab?.id;

		if (!tabId) {
			throw new Error("Article service must be called from a tab context.");
		}

		const parseArticle = (): ArticleSnapshot => ({
			title: document.title,
			text: document.body.innerText.slice(0, 5000),
			url: location.href,
		});

		const [result] = await executeScript<ArticleSnapshot>({
			target: {tabId},
			func: parseArticle,
		});

		if (!result?.result) {
			throw new Error("Article parsing returned no result.");
		}

		return result.result;
	}
}

export default defineService({
	name: "article",
	manifestVersion: 3,
	permissions: ["scripting"],

	init() {
		return new ArticleMv3Service();
	},
});

import {defineService} from "adnbn";
import {executeScriptTab} from "adnbn/browser";
import type {MessageSender, MessageSenderAware} from "adnbn/message";

import type {ArticleService, ArticleSnapshot} from "../types/article";

class ArticleMv2Service implements ArticleService, MessageSenderAware {
	declare readonly $sender?: MessageSender;

	async parse(): Promise<ArticleSnapshot> {
		const tabId = this.$sender?.tab?.id;

		if (!tabId) {
			throw new Error("Article service must be called from a tab context.");
		}

		const parseArticle = `(() => ({
      title: document.title,
      text: document.body.innerText.slice(0, 5000),
      url: location.href,
    }))()`;

		const [snapshot] =
			(await executeScriptTab(tabId, {
				code: parseArticle,
			})) ?? [];

		if (!snapshot) {
			throw new Error("Article parsing returned no result.");
		}

		return snapshot as ArticleSnapshot;
	}
}

export default defineService({
	name: "article",
	manifestVersion: 2,
	permissions: ["tabs"],

	init() {
		return new ArticleMv2Service();
	},
});

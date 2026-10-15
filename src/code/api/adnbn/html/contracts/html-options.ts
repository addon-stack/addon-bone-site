import type {HtmlMetaTagOptions} from "adnbn";

import type {HtmlTagsPluginOptions} from "@rspackjs/plugin-html-tags";

export type HtmlOptions = Omit<HtmlTagsPluginOptions, "metas"> & {
	metas?: HtmlMetaTagOptions | HtmlMetaTagOptions[];
};
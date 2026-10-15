interface HtmlTagsPluginOptions extends CommonOptions {
	append?: boolean;
	prependExternals?: boolean;
	jsExtensions?: string | string[];
	cssExtensions?: string | string[];
	files?: string | string[];
	tags?:
		| string
		| MaybeLinkTagOptions
		| MaybeScriptTagOptions
		| Array<string | MaybeLinkTagOptions | MaybeScriptTagOptions>;
	links?: string | LinkTagOptions | Array<string | LinkTagOptions>;
	scripts?: string | ScriptTagOptions | Array<string | ScriptTagOptions>;
	metas?: string | MetaTagOptions | Array<string | MetaTagOptions>;
}
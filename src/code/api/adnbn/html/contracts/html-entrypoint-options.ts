export type HtmlEntrypointOptions = HtmlStaticOptions<
	Omit<HtmlOptions, "files">
> & {
	files?: never;
};
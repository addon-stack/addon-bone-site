export type PageAlias = keyof PageAliasRegistry extends never
	? string
	: Extract<keyof PageAliasRegistry, string>;
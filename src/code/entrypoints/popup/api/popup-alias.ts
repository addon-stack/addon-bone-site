export type PopupAlias = keyof PopupAliasRegistry extends never
	? string
	: Extract<keyof PopupAliasRegistry, string>;
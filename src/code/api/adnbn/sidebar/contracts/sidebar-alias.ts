export type SidebarAlias = keyof SidebarAliasRegistry extends never
	? string
	: Extract<keyof SidebarAliasRegistry, string>;
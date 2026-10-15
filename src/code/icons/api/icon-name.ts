export type IconName = keyof IconNameRegistry extends never
	? string
	: Extract<keyof IconNameRegistry, string>;
export type ViewRenderValue<T extends ViewConfig> =
	| ViewVanillaRenderValue
	| ViewReactRenderValue<T>;
export type ViewRenderHandler<T extends ViewConfig> = (
	props: T,
) => void | ViewRenderValue<T>;
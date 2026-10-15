export type ViewContainerFactory<T extends ViewConfig> = (
	props: T,
) => Awaiter<Element | ViewContainerTag | ViewContainerOptions>;
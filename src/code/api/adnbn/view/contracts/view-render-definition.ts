export interface ViewRenderDefinition<T extends ViewConfig> {
	render?: ViewRenderValue<T> | ViewRenderHandler<T>;
	container?: ViewContainerTag | ViewContainerOptions | ViewContainerFactory<T>;
}
export interface ViewDefinition<T extends ViewConfig>
	extends ViewOptions,
		ViewRenderDefinition<T> {}
export interface OffscreenDefinition<T extends TransportType>
	extends TransportDefinition<OffscreenOptions, T>,
		OffscreenEntrypointOptions,
		ViewRenderDefinition<OffscreenEntrypointOptions> {
	main?: OffscreenMainHandler<T>;
}
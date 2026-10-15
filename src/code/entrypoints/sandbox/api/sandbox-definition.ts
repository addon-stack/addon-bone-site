export interface SandboxDefinition<T extends TransportType>
	extends TransportDefinition<SandboxOptions, T>,
		SandboxEntrypointOptions,
		ViewRenderDefinition<SandboxEntrypointOptions> {
	main?: SandboxMainHandler<T>;
}
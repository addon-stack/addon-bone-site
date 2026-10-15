export type ServiceDefinition<T extends TransportType> = TransportDefinition<
	ServiceOptions,
	T
> &
	ServiceEntrypointOptions;
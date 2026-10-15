export type TransportMainHandler<
	O extends TransportEntrypointOptions,
	T extends TransportType,
> = (instance: T, options: O) => Awaiter<void>;
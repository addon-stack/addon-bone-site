export type TransportInitGetter<
	O extends TransportEntrypointOptions,
	T extends TransportType,
> = (options: O) => T;
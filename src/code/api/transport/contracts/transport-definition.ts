export type TransportDefinition<
	O extends TransportOptions,
	T extends TransportType,
> = TransportEntrypointOptions & {
	init: TransportInitGetter<O, T>;
	main?: TransportMainHandler<O, T>;
};
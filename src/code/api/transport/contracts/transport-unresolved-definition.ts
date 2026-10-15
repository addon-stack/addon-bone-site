export type TransportUnresolvedDefinition<
	O extends TransportOptions,
	T extends TransportType,
> = Partial<TransportDefinition<O, T>>;
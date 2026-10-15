export type ServiceTarget<N extends keyof ServiceRegistry> = TransportTarget<
	ServiceRegistry,
	N
>;
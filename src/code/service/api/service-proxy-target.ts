export type ServiceProxyTarget<N extends keyof ServiceRegistry> =
	TransportProxyTarget<ServiceRegistry, N>;
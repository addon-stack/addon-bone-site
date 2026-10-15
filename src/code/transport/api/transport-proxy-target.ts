export type TransportProxyTarget<
	T extends object,
	K extends keyof T,
> = RpcAsyncProxy<T[K]>;
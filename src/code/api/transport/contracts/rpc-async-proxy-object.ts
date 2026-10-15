export type RpcAsyncProxyObject<T> = (() => Promise<RpcAsyncProxy<T>>) &
	RpcAsyncProxy<T>;
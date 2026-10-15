declare class ProxyService<
	N extends TransportName,
	T = RpcAsyncProxy<TransportDictionary[N]>,
> extends ProxyTransport<N, T> {
	constructor(name: N);
	get(): T;
}
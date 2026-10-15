type CreateParameters = chrome.offscreen.CreateParameters;

declare class ProxyOffscreen<
	N extends TransportName,
	T = RpcAsyncProxy<TransportDictionary[N]>,
> extends ProxyTransport<N, T> {
	constructor(name: N, parameters: CreateParameters);
	get(): T;
}
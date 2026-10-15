declare class RegisterOffscreen<
	N extends TransportName,
	T extends object = TransportDictionary[N],
	A extends any[] = [],
> extends RegisterTransport<N, T, A> {
	constructor(name: N, init: (...args: A) => T);
	get(): T;
}
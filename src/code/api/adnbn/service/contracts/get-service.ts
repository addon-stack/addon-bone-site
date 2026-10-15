declare function getService<N extends ServiceName>(
	name: N,
): ServiceProxyTarget<N>;
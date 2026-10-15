declare function getOffscreen<N extends OffscreenName>(
	name: N,
): OffscreenProxyTarget<N>;
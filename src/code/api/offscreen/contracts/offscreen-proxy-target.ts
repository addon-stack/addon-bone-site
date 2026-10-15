export type OffscreenProxyTarget<N extends keyof OffscreenRegistry> =
	TransportProxyTarget<OffscreenRegistry, N>;
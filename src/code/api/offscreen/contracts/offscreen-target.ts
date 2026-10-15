export type OffscreenTarget<N extends keyof OffscreenRegistry> =
	TransportTarget<OffscreenRegistry, N>;
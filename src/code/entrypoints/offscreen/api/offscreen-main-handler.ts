export type OffscreenMainHandler<T extends TransportType> = (
	offscreen: T,
	options: OffscreenEntrypointOptions,
) => Awaiter<void>;
export type SandboxMainHandler<T extends TransportType> = (
	sandbox: T,
	options: SandboxEntrypointOptions,
) => Awaiter<void>;
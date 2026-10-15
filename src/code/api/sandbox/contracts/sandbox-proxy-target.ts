export type SandboxProxyTarget<N extends keyof SandboxRegistry> = RpcAsyncProxy<
	SandboxRegistry[N]
>;
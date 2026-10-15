declare function getSandbox<N extends SandboxName>(
	name: N,
): SandboxProxyTarget<N>;
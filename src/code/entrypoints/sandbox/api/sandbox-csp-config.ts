export interface SandboxCspConfig {
	eval?: boolean;
	inline?: boolean;
	allow?: Array<SandboxAllow | `${SandboxAllow}`>;
	sources?: SandboxCspSources;
}
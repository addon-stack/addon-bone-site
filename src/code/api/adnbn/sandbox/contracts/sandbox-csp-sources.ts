export interface SandboxCspSources {
	connect?: Array<SandboxSource | `${SandboxSource}`>;
	image?: Array<SandboxSource | `${SandboxSource}`>;
	style?: Array<SandboxSource | `${SandboxSource}`>;
	font?: Array<SandboxSource | `${SandboxSource}`>;
	media?: Array<SandboxSource | `${SandboxSource}`>;
	worker?: Array<SandboxSource | `${SandboxSource}`>;
	child?: Array<SandboxSource | `${SandboxSource}`>;
}
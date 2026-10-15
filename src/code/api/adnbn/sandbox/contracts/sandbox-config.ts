export interface SandboxConfig extends TransportConfig {
	readyTimeout?: number;
	requestTimeout?: number;
	removeOnRequestTimeout?: boolean;
}
export interface SandboxRequestMessage {
	type: typeof SandboxRequestMessageType;
	channel: string;
	name: string;
	requestId: string;
	path?: string;
	args: any[];
}
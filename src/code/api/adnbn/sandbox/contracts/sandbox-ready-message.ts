export interface SandboxReadyMessage {
	type: typeof SandboxReadyMessageType;
	channel: string;
	name: string;
}
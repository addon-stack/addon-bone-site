export interface SandboxResponseMessage {
	type: typeof SandboxResponseMessageType;
	channel: string;
	name: string;
	requestId: string;
	ok: boolean;
	payload?: any;
	error?: MessageError;
}
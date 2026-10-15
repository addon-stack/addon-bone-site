export interface SandboxPort {
	connect(): Promise<void>;

	post(message: SandboxEnvelope): void;

	subscribe(
		onMessage: (message: SandboxEnvelope, sender: MessageSender) => void,
	): () => void;

	dispose(): void;
}
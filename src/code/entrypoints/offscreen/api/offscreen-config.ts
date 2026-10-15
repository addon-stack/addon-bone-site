export interface OffscreenConfig extends TransportConfig {
	reasons?:
		| `${OffscreenReason}`
		| `${OffscreenReason}`[]
		| OffscreenReason
		| OffscreenReason[];
	justification?: string;
}
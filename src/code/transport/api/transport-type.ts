export type TransportType =
	| ((...args: any[]) => Promise<any>)
	| {[key: string]: any | TransportType};
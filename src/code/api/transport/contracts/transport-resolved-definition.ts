import type {Required} from "utility-types";

export type TransportResolvedDefinition<
	O extends TransportOptions,
	T extends TransportType,
> = Required<TransportDefinition<O, T>, "name" | "init">;
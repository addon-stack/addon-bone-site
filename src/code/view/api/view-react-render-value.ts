import type {ReactNode} from "react";

export type ViewReactRenderValue<T extends ViewConfig> =
	| Exclude<ReactNode, Promise<unknown>>
	| ViewRenderReactComponent<T>;
import type {ReactNode} from "react";

export type ViewRenderReactComponent<T extends ViewConfig> = (
	props: T,
) => Exclude<ReactNode, Promise<unknown>>;
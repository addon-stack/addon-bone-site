import type {definePopup} from "adnbn";

export type PopupDefinition = Parameters<typeof definePopup>[0];
export type PopupProps = Omit<PopupDefinition, "render" | "container">;
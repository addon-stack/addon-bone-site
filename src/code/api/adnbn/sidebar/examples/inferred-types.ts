import type {defineSidebar} from "adnbn";

export type SidebarDefinition = Parameters<typeof defineSidebar>[0];
export type SidebarProps = Omit<SidebarDefinition, "render" | "container">;
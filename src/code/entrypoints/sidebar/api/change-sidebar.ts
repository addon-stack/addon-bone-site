type Tab = chrome.tabs.Tab;

export declare function changeSidebar(
	alias: SidebarAlias,
	tab?: number | Tab,
): Promise<void>;
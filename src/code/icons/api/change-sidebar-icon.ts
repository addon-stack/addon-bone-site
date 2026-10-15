type Tab = chrome.tabs.Tab;

declare function changeSidebarIcon(
	icon?: IconName,
	tab?: number | Tab,
): Promise<void>;
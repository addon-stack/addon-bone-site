type Tab = chrome.tabs.Tab;

declare function changeActionIcon(
	icon?: IconName,
	tab?: number | Tab,
): Promise<void>;
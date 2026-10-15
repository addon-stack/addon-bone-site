type Tab = chrome.tabs.Tab;

export declare function changePopup(
	alias: PopupAlias,
	tab?: number | Tab,
): Promise<void>;
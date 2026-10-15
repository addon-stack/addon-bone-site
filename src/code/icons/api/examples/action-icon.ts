import {changeActionIcon} from "adnbn";

export const markTabActive = async (tab: chrome.tabs.Tab) => {
	await changeActionIcon("active", tab);
};
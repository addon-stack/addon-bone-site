export const name = "show-tab";
export const description = "Show current tab";
export const defaultKey = "Ctrl+Shift+Y";

export default (tab?: chrome.tabs.Tab) => {
	console.log("Current tab", tab?.id);
};
export const name = "_execute_action";
export const defaultKey = "Ctrl+Shift+U";

export default (tab?: chrome.tabs.Tab) => {
	console.log("Action command executed", tab);
};
export const name = "open-dashboard";
export const defaultKey = "Ctrl+Shift+Y";

export default async (tab) => {
	console.log("Open dashboard from", tab?.url);
};

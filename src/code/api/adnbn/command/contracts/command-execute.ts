type Tab = chrome.tabs.Tab;

export type CommandExecute = (
	tab: Tab | undefined,
	options: CommandOptions,
) => Awaiter<void>;
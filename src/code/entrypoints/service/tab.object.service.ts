import type {MessageSenderAware} from "adnbn/message";

export default () => ({
	currentTabId(this: MessageSenderAware): number | null {
		return this.$sender?.tab?.id ?? null;
	},
});
import type {MessageSenderAware} from "adnbn/message";

export default () => ({
	callerUrl(this: MessageSenderAware): string | null {
		return this.$sender?.url ?? null;
	},
});
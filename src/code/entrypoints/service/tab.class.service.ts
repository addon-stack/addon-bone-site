import type {MessageSender} from "adnbn/message";

class TabService {
	protected declare readonly $sender?: MessageSender;

	currentTabId(): number | null {
		return this.$sender?.tab?.id ?? null;
	}
}

export default () => new TabService();

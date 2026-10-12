import type {MessageSender} from "adnbn/message";

class CallerOffscreen {
	protected declare readonly $sender?: MessageSender;

	callerUrl(): string | null {
		return this.$sender?.url ?? null;
	}
}

export default () => new CallerOffscreen();
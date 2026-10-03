import {OffscreenReason} from "adnbn";

export const reasons = OffscreenReason.DOMParser;

export default () => ({
	ping(): string {
		return "pong";
	},
});

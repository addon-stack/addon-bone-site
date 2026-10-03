import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.DOMParser,

	init() {
		return {
			ping(): string {
				return "pong";
			},
		};
	},
});

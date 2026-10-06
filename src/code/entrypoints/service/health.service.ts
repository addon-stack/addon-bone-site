import {defineService} from "adnbn";

export default defineService({
	name: "health",
	init() {
		return {
			status(): string {
				return "ok";
			},
		};
	},
});
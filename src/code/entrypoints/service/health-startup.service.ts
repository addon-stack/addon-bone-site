import {defineService} from "adnbn";

export default defineService({
	init() {
		return {
			status(): string {
				return "ok";
			},
		};
	},
	main(health) {
		console.log(health.status());
	},
});
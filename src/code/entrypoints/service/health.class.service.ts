import {defineService} from "adnbn";

class HealthService {
	status(): string {
		return this._statusText();
	}
	_statusText(): string {
		return "ok";
	}
}

export default defineService({
	init() {
		return new HealthService();
	},
});
import {definePopup} from "adnbn";
import {openOptionsPage} from "adnbn/browser";

export default definePopup({
	render() {
		const button = document.createElement("button");
		button.textContent = "Settings";
		button.addEventListener("click", async () => {
			try {
				await openOptionsPage();
			} catch (error) {
				console.error("Could not open settings:", error);
			}
		});
		return button;
	},
});
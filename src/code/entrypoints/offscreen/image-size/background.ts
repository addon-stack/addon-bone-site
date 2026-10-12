import {defineBackground, getOffscreen} from "adnbn";
import {getUrl} from "adnbn/browser";

export default defineBackground({
	async main() {
		const images = getOffscreen("images");
		const {width, height} = await images.size(getUrl("sample.svg"));

		console.log(width, height);
	},
});
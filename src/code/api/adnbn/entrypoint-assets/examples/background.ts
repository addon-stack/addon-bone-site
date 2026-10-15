import {defineBackground, getEntrypointAssetsMap} from "adnbn";

export default defineBackground({
	main() {
		console.log(getEntrypointAssetsMap());
	},
});
import {defineBackground, getOffscreen} from "adnbn";

export default defineBackground({
	main: async () => {
		const image = await getOffscreen("image").create("Hello, Addon Bone!");

		console.log(image);
	},
});
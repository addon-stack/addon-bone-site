import {defineOffscreen, OffscreenReason} from "adnbn";

import {TextImage} from "./TextImage";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,
	justification: "Generate a PNG image from text.",
	init: () => new TextImage(),
	render: () => {
		const canvas = document.createElement("canvas");
		canvas.width = 320;
		canvas.height = 80;
		return canvas;
	},
});
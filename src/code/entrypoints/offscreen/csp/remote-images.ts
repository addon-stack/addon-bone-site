import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,
	justification: "Read the dimensions of a downloaded image.",
	hostPermissions: ["https://images.example.com/*"],
	csp: {
		sources: {
			connect: ["https://images.example.com"],
		},
	},
	init: () => ({
		async size(url: string): Promise<{width: number; height: number}> {
			const response = await fetch(url);
			const blob = await response.blob();
			const image = await createImageBitmap(blob);
			const size = {width: image.width, height: image.height};
			image.close();

			return size;
		},
	}),
});
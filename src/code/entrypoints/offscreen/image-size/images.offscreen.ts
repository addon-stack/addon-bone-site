import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,
	justification: "Read the width and height of a local image.",
	init: () => ({
		async size(url: string): Promise<{width: number; height: number}> {
			const response = await fetch(url);
			const blob = await response.blob();
			const imageUrl = URL.createObjectURL(blob);

			try {
				const image = new Image();
				image.src = imageUrl;
				await image.decode();

				return {width: image.naturalWidth, height: image.naturalHeight};
			} finally {
				URL.revokeObjectURL(imageUrl);
			}
		},
	}),
});
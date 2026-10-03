import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,

	init() {
		return {
			async thumbnail(url: string, maxWidth = 320): Promise<string> {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`Image request failed with ${response.status}`);
				}

				const blob = await response.blob();
				const objectUrl = URL.createObjectURL(blob);

				try {
					const image = new Image();

					image.src = objectUrl;
					await image.decode();

					const scale = Math.min(1, maxWidth / image.naturalWidth);
					const width = Math.round(image.naturalWidth * scale);
					const height = Math.round(image.naturalHeight * scale);

					const canvas = document.createElement("canvas");
					canvas.width = width;
					canvas.height = height;

					const context = canvas.getContext("2d");

					if (!context) {
						throw new Error("Canvas 2D context is not available");
					}

					context.drawImage(image, 0, 0, width, height);

					return canvas.toDataURL("image/png");
				} finally {
					URL.revokeObjectURL(objectUrl);
				}
			},
		};
	},
});

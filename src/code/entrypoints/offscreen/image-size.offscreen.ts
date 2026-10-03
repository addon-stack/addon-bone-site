import {defineOffscreen, OffscreenReason} from "adnbn";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,

	init() {
		return {
			async size(url: string) {
				const response = await fetch(url);
				const blob = await response.blob();
				const objectUrl = URL.createObjectURL(blob);

				try {
					const image = new Image();

					image.src = objectUrl;
					await image.decode();

					return {
						width: image.naturalWidth,
						height: image.naturalHeight,
					};
				} finally {
					URL.revokeObjectURL(objectUrl);
				}
			},
		};
	},
});

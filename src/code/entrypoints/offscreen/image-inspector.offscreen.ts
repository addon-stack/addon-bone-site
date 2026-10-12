import {defineOffscreen, OffscreenReason} from "adnbn";

import {
	type ImageInput,
	type ImageMetadata,
	inspectImage,
} from "@acme/image-inspector";

class ImageInspector {
	/**
	 * @param {import("@acme/image-inspector").ImageInput} source
	 * @returns {Promise<import("@acme/image-inspector").ImageMetadata>}
	 */
	inspect(source: ImageInput): Promise<ImageMetadata> {
		return inspectImage(source);
	}
}

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,
	justification: "Inspect image data in a hidden document.",

	init() {
		return new ImageInspector();
	},
});
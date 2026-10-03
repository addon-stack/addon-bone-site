import {defineService} from "adnbn";
import {download} from "adnbn/browser";

import {AbstractScreenshotService} from "./AbstractScreenshotService";

class ScreenshotMV2Service extends AbstractScreenshotService {
	protected async download(dataUrl: string, filename: string): Promise<number> {
		const objectUrl = URL.createObjectURL(this.dataUrlToBlob(dataUrl));

		try {
			return await download({
				url: objectUrl,
				filename,
			});
		} finally {
			URL.revokeObjectURL(objectUrl);
		}
	}

	private dataUrlToBlob(dataUrl: string): Blob {
		const [header, base64] = dataUrl.split(",");
		const mime = header.split(":")[1]?.split(";")[0] ?? "image/png";
		const binary = atob(base64 ?? "");
		const buffer = new ArrayBuffer(binary.length);
		const bytes = new Uint8Array(buffer);

		for (let i = 0; i < binary.length; i++) {
			bytes[i] = binary.charCodeAt(i);
		}

		return new Blob([buffer], {type: mime});
	}
}

export default defineService({
	name: "screenshot",
	manifestVersion: 2,
	permissions: ["activeTab", "downloads"],

	init() {
		return new ScreenshotMV2Service();
	},
});

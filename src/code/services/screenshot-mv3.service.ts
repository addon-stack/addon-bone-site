import {defineService} from "adnbn";
import {download} from "adnbn/browser";

import {AbstractScreenshotService} from "./AbstractScreenshotService";

class ScreenshotMV3Service extends AbstractScreenshotService {
	protected download(dataUrl: string, filename: string): Promise<number> {
		return download({
			url: dataUrl,
			filename,
		});
	}
}

export default defineService({
	name: "screenshot",
	manifestVersion: 3,
	permissions: ["activeTab", "downloads"],

	init() {
		return new ScreenshotMV3Service();
	},
});

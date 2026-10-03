import {captureVisibleTab} from "adnbn/browser";

export abstract class AbstractScreenshotService {
	async capture(windowId: number): Promise<number> {
		const dataUrl = await captureVisibleTab(windowId, {format: "png"});

		return this.download(dataUrl, this.filename());
	}

	protected abstract download(
		dataUrl: string,
		filename: string,
	): Promise<number>;

	protected filename(): string {
		return `screenshot-${new Date().toISOString().replaceAll(":", "-")}.png`;
	}
}

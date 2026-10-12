export class TextImage {
	create(text: string): Promise<string> {
		const canvas = document.querySelector("canvas");

		if (!canvas) {
			throw new Error("Canvas has not been rendered.");
		}

		const context = canvas.getContext("2d");

		if (!context) {
			throw new Error("Canvas 2D context is unavailable.");
		}
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.font = "24px sans-serif";
		context.fillText(text, 16, 48);

		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = () => reject(reader.error);

			canvas.toBlob((blob) => {
				if (!blob) {
					reject(new Error("Could not create the image."));
					return;
				}

				reader.readAsDataURL(blob);
			}, "image/png");
		});
	}
}
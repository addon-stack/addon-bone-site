export class TextImage {
	create(text: string): Promise<string> {
		const canvas = document.querySelector("canvas");

		if (!canvas) {
			throw new Error("Canvas has not been rendered.");
		}

		const context = canvas.getContext("2d")!;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.font = "24px sans-serif";
		context.fillText(text, 16, 48);

		return new Promise<string>((resolve) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);

			canvas.toBlob((blob) => {
				reader.readAsDataURL(blob!);
			}, "image/png");
		});
	}
}
import {definePage} from "adnbn";

export default definePage({
	title: "Counter",
	container: {tagName: "main", className: "counter"},
	render() {
		const button = document.createElement("button");
		let count = 0;

		button.textContent = `Count: ${count}`;
		button.addEventListener("click", () => {
			count += 1;
			button.textContent = `Count: ${count}`;
		});

		return button;
	},
});
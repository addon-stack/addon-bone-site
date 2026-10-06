import {definePage, getPages} from "adnbn";
import {getUrl} from "adnbn/browser";

export default definePage({
	name: "navigation",
	title: "Pages",
	container: "nav",
	render() {
		const list = document.createElement("ul");

		for (const [name, path] of getPages()) {
			if (name === "navigation") continue;

			const item = document.createElement("li");
			const link = document.createElement("a");
			link.href = getUrl(path);
			link.textContent = name;
			item.append(link);
			list.append(item);
		}

		return list;
	},
});
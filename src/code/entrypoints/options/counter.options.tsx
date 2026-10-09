import {defineOptions} from "adnbn";

import Counter from "./Counter";

export default defineOptions({
	title: "Counter",
	container: {tagName: "main", className: "counter"},
	render: Counter,
});
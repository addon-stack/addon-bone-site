import {defineNewtab} from "adnbn";

import Counter from "./Counter";

export default defineNewtab({
	title: "Counter",
	container: {tagName: "main", className: "counter"},
	render: Counter,
});
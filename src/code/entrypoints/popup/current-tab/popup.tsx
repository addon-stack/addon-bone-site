import {definePopup} from "adnbn";

import CurrentTab from "./CurrentTab";

export default definePopup({
	title: "Current tab",
	tooltip: "Show current tab",
	permissions: ["activeTab"],
	container: "main",
	render: CurrentTab,
});
import {definePopup} from "adnbn";

import styles from "./popup.scss";

import CurrentTab from "./CurrentTab";

export default definePopup({
	title: "Current tab",
	tooltip: "Show current tab",
	permissions: ["activeTab"],
	container: {
		tagName: "main",
		className: styles.popup,
	},
	render: CurrentTab,
});
import {defineOptions} from "adnbn";

import styles from "./settings.scss";

import SettingsForm from "./SettingsForm";

export default defineOptions({
	title: "Settings",
	permissions: ["storage"],
	container: {tagName: "main", className: styles.form},
	render: SettingsForm,
});
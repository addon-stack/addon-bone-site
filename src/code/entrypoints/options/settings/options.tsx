import {defineOptions} from "adnbn";

import SettingsForm from "./SettingsForm";

export default defineOptions({
	title: "Settings",
	permissions: ["storage"],
	render: SettingsForm,
});
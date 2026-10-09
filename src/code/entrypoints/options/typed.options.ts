import {defineOptions, type OptionsProps, type ViewRenderHandler} from "adnbn";

const renderSettings: ViewRenderHandler<OptionsProps> = ({title}) => {
	const heading = document.createElement("h1");
	heading.textContent = title ?? "Settings";

	return heading;
};

export default defineOptions({
	title: "Settings",
	render: renderSettings,
});
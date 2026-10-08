import {defineNewtab, type NewtabProps, type ViewRenderHandler} from "adnbn";

const renderReport: ViewRenderHandler<NewtabProps> = ({title}) => {
	const heading = document.createElement("h1");
	heading.textContent = title ?? "Report";

	return heading;
};

export default defineNewtab({
	title: "Report",
	render: renderReport,
});
import {definePage, type PageProps, type ViewRenderHandler} from "adnbn";

const renderReport: ViewRenderHandler<PageProps> = ({title}) => {
	const heading = document.createElement("h1");
	heading.textContent = title ?? "Report";

	return heading;
};

export default definePage({title: "Report", render: renderReport});
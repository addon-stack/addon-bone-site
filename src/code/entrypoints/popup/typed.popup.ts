import {definePopup, type ViewRenderHandler} from "adnbn";

type PopupDefinition = Parameters<typeof definePopup>[0];
type PopupProps = Omit<PopupDefinition, "render" | "container">;

const renderPopup: ViewRenderHandler<PopupProps> = ({title}) => {
	const heading = document.createElement("h1");
	heading.textContent = title ?? "Quick actions";

	return heading;
};

export default definePopup({
	title: "Quick actions",
	render: renderPopup,
});
import {definePopup, type ViewRenderReactComponent} from "adnbn";

import React from "react";

type PopupDefinition = Parameters<typeof definePopup>[0];
type PopupProps = Omit<PopupDefinition, "render" | "container">;

const PopupContent: ViewRenderReactComponent<PopupProps> = ({title}) => (
	<h1>{title}</h1>
);

export default definePopup({
	title: "Quick actions",
	render: PopupContent,
});
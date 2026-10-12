import React from "react";

import {
	defineNewtab,
	type NewtabProps,
	type ViewRenderReactComponent,
} from "adnbn";

const Report: ViewRenderReactComponent<NewtabProps> = ({title}) => (
	<h1>{title}</h1>
);

export default defineNewtab({
	title: "Report",
	render: Report,
});
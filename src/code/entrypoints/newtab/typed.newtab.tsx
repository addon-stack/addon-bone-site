import {
	defineNewtab,
	type NewtabProps,
	type ViewRenderReactComponent,
} from "adnbn";

import React from "react";

const Report: ViewRenderReactComponent<NewtabProps> = ({title}) => (
	<h1>{title}</h1>
);

export default defineNewtab({
	title: "Report",
	render: Report,
});
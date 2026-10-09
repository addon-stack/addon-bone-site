import {
	defineOptions,
	type OptionsProps,
	type ViewRenderReactComponent,
} from "adnbn";

import React from "react";

const Settings: ViewRenderReactComponent<OptionsProps> = ({title}) => (
	<h1>{title}</h1>
);

export default defineOptions({
	title: "Settings",
	render: Settings,
});
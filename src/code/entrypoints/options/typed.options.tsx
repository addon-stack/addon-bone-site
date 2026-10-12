import React from "react";

import {
	defineOptions,
	type OptionsProps,
	type ViewRenderReactComponent,
} from "adnbn";

const Settings: ViewRenderReactComponent<OptionsProps> = ({title}) => (
	<h1>{title}</h1>
);

export default defineOptions({
	title: "Settings",
	render: Settings,
});
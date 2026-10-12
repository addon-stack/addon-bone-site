import React from "react";

import {definePage, type PageProps, type ViewRenderReactComponent} from "adnbn";

const Report: ViewRenderReactComponent<PageProps> = ({title}) => (
	<h1>{title}</h1>
);

export default definePage({title: "Report", render: Report});
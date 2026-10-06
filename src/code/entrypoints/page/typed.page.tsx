import {definePage, type PageProps, type ViewRenderReactComponent} from "adnbn";

import React from "react";

const Report: ViewRenderReactComponent<PageProps> = ({title}) => <h1>{title}</h1>;

export default definePage({title: "Report", render: Report});
import {defineOffscreen, OffscreenReason} from "adnbn";

import React from "react";

import {TextImage} from "./TextImage";

export default defineOffscreen({
	reasons: OffscreenReason.Blobs,
	justification: "Generate a PNG image from text.",
	init: () => new TextImage(),
	render: () => <canvas width={320} height={80} />,
});
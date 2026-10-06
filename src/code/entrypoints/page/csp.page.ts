import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		wasm: true,
		sources: {image: [CspSource.Self, CspSource.Data]},
	},
	render: "WebAssembly and data URL images are allowed by this build's CSP.",
});
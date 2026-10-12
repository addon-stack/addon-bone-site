import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		wasm: true,
		sources: {
			image: [CspSource.Self, CspSource.Data, CspSource.Blob],
			worker: [CspSource.Self],
			frame: [CspSource.None],
		},
	},
	render:
		"This build allows Blob images and packaged workers, and blocks frames.",
});
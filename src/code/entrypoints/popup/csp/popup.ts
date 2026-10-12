import {CspSource, definePopup} from "adnbn";

export default definePopup({
	title: "Quick actions",
	tooltip: "Open quick actions",
	csp: {
		wasm: true,
		sources: {
			image: [CspSource.Self, CspSource.Data],
		},
	},
	render: "This build allows WebAssembly and images in data URLs.",
});
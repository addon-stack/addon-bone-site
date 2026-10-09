import {CspSource, defineOptions} from "adnbn";

export default defineOptions({
	title: "Settings",
	csp: {
		wasm: true,
		sources: {image: [CspSource.Self, CspSource.Data]},
	},
	render: "This build allows WebAssembly and images in data URLs.",
});
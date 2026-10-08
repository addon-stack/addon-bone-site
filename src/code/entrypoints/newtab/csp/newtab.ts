import {CspSource, defineNewtab} from "adnbn";

export default defineNewtab({
	title: "Start",
	csp: {
		wasm: true,
		sources: {image: [CspSource.Self, CspSource.Data]},
	},
	render: "This build allows WebAssembly and images in data URLs.",
});
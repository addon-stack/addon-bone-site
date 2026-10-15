import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			worker: [SandboxSource.Self, SandboxSource.Blob],
		},
	},
	init: () => ({}),
});
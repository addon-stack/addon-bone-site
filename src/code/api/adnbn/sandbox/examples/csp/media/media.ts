import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			media: [SandboxSource.Self, SandboxSource.Blob],
		},
	},
	init: () => ({}),
});
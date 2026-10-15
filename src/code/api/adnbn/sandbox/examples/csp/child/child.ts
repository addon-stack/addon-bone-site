import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			child: [SandboxSource.Blob],
		},
	},
	init: () => ({}),
});
import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			image: [SandboxSource.Self, SandboxSource.Data],
		},
	},
	init: () => ({}),
});
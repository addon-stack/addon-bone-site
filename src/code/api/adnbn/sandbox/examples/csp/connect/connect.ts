import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			connect: [SandboxSource.None],
		},
	},
	init: () => ({}),
});
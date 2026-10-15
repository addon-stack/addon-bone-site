import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			font: [SandboxSource.Self, SandboxSource.Data],
		},
	},
	init: () => ({}),
});
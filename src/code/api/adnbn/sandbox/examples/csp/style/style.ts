import {defineSandbox, SandboxSource} from "adnbn";

export default defineSandbox({
	csp: {
		sources: {
			style: [SandboxSource.Self, SandboxSource.UnsafeInline],
		},
	},
	init: () => ({}),
});
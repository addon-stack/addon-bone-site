import {defineSandbox, SandboxAllow} from "adnbn";

export default defineSandbox({
	csp: {
		allow: [SandboxAllow.Forms],
	},
	init: () => ({}),
});
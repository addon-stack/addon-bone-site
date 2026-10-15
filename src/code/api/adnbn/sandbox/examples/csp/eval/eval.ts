import {defineSandbox} from "adnbn";

export default defineSandbox({
	csp: {
		eval: false,
	},
	init: () => ({}),
});
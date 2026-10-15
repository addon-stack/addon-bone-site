import {defineSandbox} from "adnbn";

export default defineSandbox({
	csp: {
		inline: true,
	},
	init: () => ({}),
});
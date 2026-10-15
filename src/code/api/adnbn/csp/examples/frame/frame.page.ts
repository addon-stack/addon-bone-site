import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			frame: [CspSource.Self, "https://example.com"],
		},
	},
});
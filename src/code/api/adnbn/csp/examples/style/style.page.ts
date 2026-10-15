import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			style: [CspSource.Self, CspSource.UnsafeInline],
		},
	},
});
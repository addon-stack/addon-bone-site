import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			image: [CspSource.Self, CspSource.Data],
		},
	},
});
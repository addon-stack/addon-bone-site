import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			worker: [CspSource.Self],
		},
	},
});
import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			media: [CspSource.Self, CspSource.Blob],
		},
	},
});
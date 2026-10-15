import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			image: [CspSource.Data, CspSource.Blob],
		},
	},
});
import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			child: [CspSource.None],
		},
	},
});
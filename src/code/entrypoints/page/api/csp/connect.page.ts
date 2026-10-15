import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			connect: [CspSource.Self, "https://api.example.com"],
		},
	},
});
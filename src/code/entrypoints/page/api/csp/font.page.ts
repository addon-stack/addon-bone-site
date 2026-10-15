import {CspSource, definePage} from "adnbn";

export default definePage({
	csp: {
		sources: {
			font: [CspSource.Self, "https://fonts.example.com"],
		},
	},
});
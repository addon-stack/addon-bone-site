import {CspSource, definePage} from "adnbn";

export default definePage({
	hostPermissions: ["https://api.example.com/*"],
	csp: {
		sources: {
			connect: [
				CspSource.Self,
				"https://api.example.com",
				"wss://socket.example.com",
			],
			style: [CspSource.Self, CspSource.UnsafeInline],
			font: [CspSource.Self],
		},
	},
	render: "This build allows the configured connections and inline styles.",
});
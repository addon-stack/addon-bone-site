export default () => ({
	version: "1.0.0",
	health: {
		status(): string {
			return "ok";
		},
	},
});
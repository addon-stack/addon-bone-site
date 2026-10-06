export const name = "health";

export default () => ({
	status(): string {
		return "ok";
	},
});
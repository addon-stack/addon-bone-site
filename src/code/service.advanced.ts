export const permissions = ["storage"];
export const hostPermissions = ["*://*.example.com/*"];

export default () => ({
	ping(): string {
		return "pong";
	},
});

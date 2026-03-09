export const permissions = ["storage"];
export const hostPermissions = ["*://*.example.com/*"];

export default async (options) => {
	console.log("Background started", options);
};

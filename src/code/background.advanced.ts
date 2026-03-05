export const permissions = ["storage"];
export const optionalPermissions = ["tabs"];

export default async (options) => {
	console.log("Background started", options);
};

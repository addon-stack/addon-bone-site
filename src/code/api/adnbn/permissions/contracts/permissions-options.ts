export interface PermissionsOptions {
	permissions?: ManifestPermission[];
	optionalPermissions?: ManifestOptionalPermission[];
	hostPermissions?: string[];
	optionalHostPermissions?: string[];
}
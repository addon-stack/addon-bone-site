export interface GeckoSpecific extends VersionSpecific {
	id?: string;
	updateUrl?: string;
	dataCollectionPermissions?: DataCollectionPermissions;
}
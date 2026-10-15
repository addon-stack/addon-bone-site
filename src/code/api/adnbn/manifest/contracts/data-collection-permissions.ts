export interface DataCollectionPermissions {
	required?: DataCollectionPermission[] | `${DataCollectionPermission}`[];
	optional?: DataCollectionPermission[] | `${DataCollectionPermission}`[];
}
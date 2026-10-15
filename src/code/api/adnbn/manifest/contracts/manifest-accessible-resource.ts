export interface ManifestAccessibleResource {
	resources: string[];
	matches?: string[];
	extensionIds?: string[];
	useDynamicUrl?: boolean;
}
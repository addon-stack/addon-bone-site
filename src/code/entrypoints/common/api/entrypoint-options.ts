export interface EntrypointOptions {
	includeBrowser?: `${Browser}`[] | Browser[];
	excludeBrowser?: `${Browser}`[] | Browser[];
	excludeApp?: string[];
	includeApp?: string[];
	mode?: `${Exclude<Mode, Mode.None>}` | Exclude<Mode, Mode.None>;
	manifestVersion?: ManifestVersion;
	debug?: boolean;
}
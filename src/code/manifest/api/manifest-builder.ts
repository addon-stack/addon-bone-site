export interface ManifestBuilder<T extends CoreManifest = Manifest> {
	setName(name: string): this;
	setShortName(shortName?: string): this;
	setDescription(description?: string): this;
	setAuthor(author?: string): this;
	setHomepage(homepage?: string): this;
	setVersion(version?: string): this;
	setIncognito(incognito?: ManifestIncognitoValue): this;
	setMinimumVersion(minimumVersion?: string): this;
	setLocale(lang?: Language): this;
	setSpecific(settings?: BrowserSpecific): this;
	mergeSpecific(settings: BrowserSpecific): this;
	setIcons(icons?: ManifestIcons): this;
	setIcon(icon?: string): this;
	setAction(action?: ActionOptions): this;
	setBackground(background?: ManifestBackground): this;
	setCommands(commands?: ManifestCommands): this;
	setContentScripts(contentScripts?: ManifestContentScripts): this;
	setPopup(popup?: ManifestPopup): this;
	setSidebar(sidebar?: ManifestSidebar): this;
	setOptions(options?: ManifestOptions): this;
	setOverride(override?: ManifestOverride): this;
	addSandbox(sandbox: ManifestSandbox): this;
	appendSandboxes(sandboxes: Iterable<ManifestSandbox>): this;
	addSandboxCsp(csp: SandboxCspConfig): this;
	appendSandboxCsp(csps: Iterable<SandboxCspConfig>): this;
	addCsp(csp: CspConfig): this;
	appendCsp(csps: Iterable<CspConfig>): this;
	addPermission(permission: ManifestPermission): this;
	setPermissions(permissions: ManifestPermissions): this;
	appendPermissions(permissions: ManifestPermissions): this;
	addOptionalPermission(permission: ManifestOptionalPermission): this;
	setOptionalPermissions(permissions: ManifestOptionalPermissions): this;
	appendOptionalPermissions(permissions: ManifestOptionalPermissions): this;
	addHostPermission(permission: string): this;
	setHostPermissions(permissions: ManifestHostPermissions): this;
	appendHostPermissions(permissions: ManifestHostPermissions): this;
	addOptionalHostPermission(permission: string): this;
	setOptionalHostPermissions(permissions: ManifestHostPermissions): this;
	appendOptionalHostPermissions(permissions: ManifestHostPermissions): this;
	setAccessibleResource(accessibleResources: ManifestAccessibleResources): this;
	appendAccessibleResources(
		accessibleResources: ManifestAccessibleResources,
	): this;
	addAccessibleResource(accessibleResource: ManifestAccessibleResource): this;
	getWebAccessibleResources(): ManifestAccessibleResource[];
	get(): T;
	raw(manifest: OptionalManifest): this;
}
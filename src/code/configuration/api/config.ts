export interface Config {
	debug: boolean;
	command: Command;
	mode: Mode;
	browser: Browser;
	app: string;
	name: undefined | string;
	shortName: undefined | string;
	description: undefined | string;
	author: undefined | string | (() => string | undefined);
	version: string | (() => string | undefined);
	minimumVersion: string | number | (() => string | number | undefined);
	homepage: string | (() => string | undefined);
	icon: string;
	action?: ActionOptions;
	specific?: BrowserSpecific | (() => BrowserSpecific | undefined);
	incognito?:
		| ManifestIncognitoValue
		| (() => ManifestIncognitoValue | undefined);
	manifest?:
		| OptionalManifest
		| ((builder: ManifestBuilder) => OptionalManifest | undefined);
	manifestVersion: ManifestVersion;
	lang: Language;
	workspace: Workspace;
	rootDir: string;
	outDir: string;
	srcDir: string;
	sharedDir: string;
	appsDir: string;
	appSrcDir: string;
	iconSrcDir: string;
	iconOutDir: string;
	jsDir: string;
	cssDir: string;
	assetsDir: string;
	htmlDir: string;
	localeDir: string;
	html: HtmlOptions | HtmlOptions[] | (() => HtmlOptions | HtmlOptions[]);
	bundler: RspackConfig | ((rspack: RspackConfig) => Awaiter<RspackConfig>);
	env: EnvFilterVariant | Partial<EnvFilterOptions>;
	plugins: Plugin[];
	analyze: boolean;
	configFile: string;
	mergeBackground: boolean;
	mergeCommands: boolean;
	mergeContentScripts: boolean;
	concatContentScripts: boolean;
	mergeStyles: boolean;
	mergeIcons: boolean;
	mergeLocales: boolean;
	mergePages: boolean;
	mergePopup: boolean;
	multiplePopup: boolean;
	mergeSidebar: boolean;
	multipleSidebar: boolean;
	mergeRelay: boolean;
	mergeService: boolean;
	mergeOffscreen: boolean;
	mergeSandbox: boolean;
	publicDir: string;
	mergePublic: boolean;
	commonChunks: boolean | ((names: Set<string>) => string | undefined);
	artifactName: string;
	assetsFilename: Filename;
	jsFilename: Filename;
	cssFilename: Filename;
	cssIdentName: string;
}
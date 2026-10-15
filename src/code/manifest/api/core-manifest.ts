type ChromeManifestBase = chrome.runtime.ManifestBase;
type ManifestFixed<T extends ChromeManifestBase> = Omit<
	T,
	"manifest_version"
> & {
	manifest_version: ManifestVersion;
};
export type CoreManifest = ManifestFixed<ChromeManifestBase>;
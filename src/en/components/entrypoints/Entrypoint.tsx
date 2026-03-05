import {
	Debug,
	ExcludeApp,
	ExcludeBrowser,
	IncludeApp,
	IncludeBrowser,
	ManifestVersion,
	Mode,
} from "./options";

export default () => {
	return (
		<>
			<IncludeBrowser />
			<ExcludeBrowser />
			<IncludeApp />
			<ExcludeApp />
			<Mode />
			<Debug />
			<ManifestVersion />
		</>
	);
};

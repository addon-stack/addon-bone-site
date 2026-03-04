import {
	Debug,
	ExcludeApp,
	ExcludeBrowser,
	IncludeApp,
	IncludeBrowser,
	ManifestVersion,
	Mode,
} from "./options";

export default function Entrypoint() {
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
}

import IncludeBrowser from "./IncludeBrowser";
import ExcludeBrowser from "./ExcludeBrowser";
import IncludeApp from "./IncludeApp";
import ExcludeApp from "./ExcludeApp";
import Mode from "./Mode";
import Debug from "./Debug";
import ManifestVersion from "./ManifestVersion";

export default function EntrypointOptions() {
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

import {ManifestVersion as BaseManifestVersion} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseManifestVersion>
			Includes this entrypoint only for selected manifest version. If it does
			not match current build target, the entrypoint is excluded from the build
			output.
		</BaseManifestVersion>
	);
};

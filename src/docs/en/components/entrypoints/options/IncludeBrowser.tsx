import {IncludeBrowser as BaseIncludeBrowser} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseIncludeBrowser>
			Includes this entrypoint only for selected target browsers. If current
			build browser is not listed, the entrypoint is excluded from the build
			output.
		</BaseIncludeBrowser>
	);
};

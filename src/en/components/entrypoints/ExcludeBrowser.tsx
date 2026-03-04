import {ExcludeBrowser as BaseExcludeBrowser} from "@components/docs/entrypoints";

export default function ExcludeBrowser() {
	return (
		<BaseExcludeBrowser>
			Excludes this entrypoint for selected target browsers. If current build
			browser is listed, the entrypoint is excluded from the build output.
		</BaseExcludeBrowser>
	);
}

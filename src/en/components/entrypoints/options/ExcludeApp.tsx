import {ExcludeApp as BaseExcludeApp} from "@components/docs/entrypoints/options";

export default function ExcludeApp() {
	return (
		<BaseExcludeApp>
			Excludes this entrypoint for selected app names (<code>config.app</code>).
			If current app is listed, the entrypoint is excluded from the build
			output.
		</BaseExcludeApp>
	);
}

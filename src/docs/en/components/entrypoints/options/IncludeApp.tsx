import {IncludeApp as BaseIncludeApp} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseIncludeApp>
			Includes this entrypoint only for selected app names (
			<code>config.app</code>). If current app is not listed, the entrypoint is
			excluded from the build output.
		</BaseIncludeApp>
	);
};

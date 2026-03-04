import {Debug as BaseDebug} from "@components/docs/entrypoints";

export default function Debug() {
	return (
		<BaseDebug>
			Includes this entrypoint only when <code>config.debug</code> matches. If
			it does not match, the entrypoint is excluded from the build output.
		</BaseDebug>
	);
}

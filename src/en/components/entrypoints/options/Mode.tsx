import {Mode as BaseMode} from "@components/docs/entrypoints/options";

export default function Mode() {
	return (
		<BaseMode>
			Includes this entrypoint only for selected build mode. If it does not
			match current mode, the entrypoint is excluded from the build output.
		</BaseMode>
	);
}

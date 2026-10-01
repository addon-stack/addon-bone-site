import {Main as BaseMain} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseMain target>
			Main execution function for the background entrypoint, executed on
			startup. The first argument (<code>options</code>) is the current
			background definition without <code>main</code>: you can read all declared
			background options here (for example <code>permissions</code>,{" "}
			<code>optionalPermissions</code>, <code>hostPermissions</code>, and{" "}
			<code>optionalHostPermissions</code>).
		</BaseMain>
	);
};

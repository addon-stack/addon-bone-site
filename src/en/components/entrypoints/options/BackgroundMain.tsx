import {Main as BaseMain} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseMain target>
			Target background handler executed on startup. The first argument (
			<code>options</code>) is the current background definition without{" "}
			<code>main</code>: you can read all declared background options here (for
			example <code>permissions</code>, <code>optionalPermissions</code>,{" "}
			<code>hostPermissions</code>, and <code>optionalHostPermissions</code>).
		</BaseMain>
	);
};

import {OptionalPermissions as BaseOptionalPermissions} from "@components/docs/entrypoints/options";

export default function OptionalPermissions() {
	return (
		<BaseOptionalPermissions>
			Appended to <code>manifest.optional_permissions</code>.
		</BaseOptionalPermissions>
	);
}

import {OptionalHostPermissions as BaseOptionalHostPermissions} from "@components/docs/entrypoints";

export default function OptionalHostPermissions() {
	return (
		<BaseOptionalHostPermissions>
			Appended to <code>manifest.optional_host_permissions</code>.
		</BaseOptionalHostPermissions>
	);
}

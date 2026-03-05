import {OptionalHostPermissions as BaseOptionalHostPermissions} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseOptionalHostPermissions>
			Appended to <code>manifest.optional_host_permissions</code>.
		</BaseOptionalHostPermissions>
	);
};

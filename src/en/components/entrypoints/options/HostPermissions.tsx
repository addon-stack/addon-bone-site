import {HostPermissions as BaseHostPermissions} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BaseHostPermissions>
			Appended to <code>manifest.host_permissions</code>.
		</BaseHostPermissions>
	);
};

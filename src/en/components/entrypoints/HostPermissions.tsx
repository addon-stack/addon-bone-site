import {HostPermissions as BaseHostPermissions} from "@components/docs/entrypoints";

export default function HostPermissions() {
	return (
		<BaseHostPermissions>
			Appended to <code>manifest.host_permissions</code>.
		</BaseHostPermissions>
	);
}

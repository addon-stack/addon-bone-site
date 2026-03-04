import {Permissions as BasePermissions} from "@components/docs/entrypoints/options";

export default function Permissions() {
	return (
		<BasePermissions>
			Appended to <code>manifest.permissions</code>.
		</BasePermissions>
	);
}

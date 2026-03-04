import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type PermissionsProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Permissions({children}: PermissionsProps) {
	return (
		<PropertySpec name="permissions" type="chrome.runtime.ManifestPermission[]">
			{children}
		</PropertySpec>
	);
}

import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type PermissionsProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Permissions({children}: PermissionsProps) {
	return (
		<PropertySpec name="permissions" type="chrome.runtime.ManifestPermission[]">
			{children}
		</PropertySpec>
	);
}

import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type HostPermissionsProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function HostPermissions({children}: HostPermissionsProps) {
	return (
		<PropertySpec name="hostPermissions" type="string[]">
			{children}
		</PropertySpec>
	);
}

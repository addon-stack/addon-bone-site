import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

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

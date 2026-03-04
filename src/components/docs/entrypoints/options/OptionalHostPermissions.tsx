import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type OptionalHostPermissionsProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function OptionalHostPermissions({
	children,
}: OptionalHostPermissionsProps) {
	return (
		<PropertySpec name="optionalHostPermissions" type="string[]">
			{children}
		</PropertySpec>
	);
}

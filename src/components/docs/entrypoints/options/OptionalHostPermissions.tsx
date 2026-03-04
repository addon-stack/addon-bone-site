import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

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

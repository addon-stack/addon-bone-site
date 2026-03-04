import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type OptionalPermissionsProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function OptionalPermissions({
	children,
}: OptionalPermissionsProps) {
	return (
		<PropertySpec
			name="optionalPermissions"
			type="chrome.runtime.ManifestOptionalPermission[]"
		>
			{children}
		</PropertySpec>
	);
}

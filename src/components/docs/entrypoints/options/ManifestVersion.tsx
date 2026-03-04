import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type ManifestVersionProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function ManifestVersion({children}: ManifestVersionProps) {
	return (
		<PropertySpec name="manifestVersion" type="2 | 3">
			{children}
		</PropertySpec>
	);
}

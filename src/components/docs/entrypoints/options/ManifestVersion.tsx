import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

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

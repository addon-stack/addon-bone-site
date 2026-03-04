import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type IncludeBrowserProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function IncludeBrowser({children}: IncludeBrowserProps) {
	return (
		<PropertySpec name="includeBrowser" type="Browser[]" required>
			{children}
		</PropertySpec>
	);
}

import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

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

import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type ExcludeBrowserProps = Pick<
	ComponentProps<typeof PropertySpec>,
	"children"
>;

export default function ExcludeBrowser({children}: ExcludeBrowserProps) {
	return (
		<PropertySpec name="excludeBrowser" type="Browser[]">
			{children}
		</PropertySpec>
	);
}

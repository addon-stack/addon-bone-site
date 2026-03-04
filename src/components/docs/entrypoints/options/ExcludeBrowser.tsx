import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

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

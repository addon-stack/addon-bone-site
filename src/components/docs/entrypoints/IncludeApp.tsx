import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type IncludeAppProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function IncludeApp({children}: IncludeAppProps) {
	return (
		<PropertySpec name="includeApp" type="string[]">
			{children}
		</PropertySpec>
	);
}

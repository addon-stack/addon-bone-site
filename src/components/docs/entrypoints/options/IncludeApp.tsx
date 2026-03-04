import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type IncludeAppProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function IncludeApp({children}: IncludeAppProps) {
	return (
		<PropertySpec name="includeApp" type="string[]">
			{children}
		</PropertySpec>
	);
}

import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type ExcludeAppProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function ExcludeApp({children}: ExcludeAppProps) {
	return (
		<PropertySpec name="excludeApp" type="string[]">
			{children}
		</PropertySpec>
	);
}

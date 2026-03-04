import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type ExcludeAppProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function ExcludeApp({children}: ExcludeAppProps) {
	return (
		<PropertySpec name="excludeApp" type="string[]">
			{children}
		</PropertySpec>
	);
}

import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type DebugProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Debug({children}: DebugProps) {
	return (
		<PropertySpec name="debug" type="boolean">
			{children}
		</PropertySpec>
	);
}

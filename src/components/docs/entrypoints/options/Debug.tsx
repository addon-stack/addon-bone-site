import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type DebugProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Debug({children}: DebugProps) {
	return (
		<PropertySpec name="debug" type="boolean">
			{children}
		</PropertySpec>
	);
}

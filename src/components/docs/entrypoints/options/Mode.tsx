import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type ModeProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Mode({children}: ModeProps) {
	return (
		<PropertySpec name="mode" type={'"development" | "production" | "none"'}>
			{children}
		</PropertySpec>
	);
}

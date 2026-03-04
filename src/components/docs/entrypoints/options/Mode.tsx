import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type ModeProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Mode({children}: ModeProps) {
	return (
		<PropertySpec name="mode" type={'"development" | "production" | "none"'}>
			{children}
		</PropertySpec>
	);
}

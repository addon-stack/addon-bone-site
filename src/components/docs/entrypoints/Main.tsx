import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type MainProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Main({children}: MainProps) {
	return (
		<PropertySpec name="main" type="(options) => void | Promise<void>">
			{children}
		</PropertySpec>
	);
}

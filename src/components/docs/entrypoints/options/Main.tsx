import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type MainProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Main({children}: MainProps) {
	return (
		<PropertySpec name="main" type="(options) => void | Promise<void>">
			{children}
		</PropertySpec>
	);
}

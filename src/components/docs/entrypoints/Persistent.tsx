import type {ComponentProps} from "react";
import PropertySpec from "@components/PropertySpec";

type PersistentProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Persistent({children}: PersistentProps) {
	return (
		<PropertySpec name="persistent" type="boolean">
			{children}
		</PropertySpec>
	);
}

import PropertySpec from "@components/PropertySpec";
import type {ComponentProps} from "react";

type PersistentProps = Pick<ComponentProps<typeof PropertySpec>, "children">;

export default function Persistent({children}: PersistentProps) {
	return (
		<PropertySpec name="persistent" type="boolean">
			{children}
		</PropertySpec>
	);
}

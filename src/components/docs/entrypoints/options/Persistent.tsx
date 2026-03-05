import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type PersistentProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: PersistentProps) => {
	return (
		<EntrypointSpec name="persistent" type="boolean">
			{children}
		</EntrypointSpec>
	);
};

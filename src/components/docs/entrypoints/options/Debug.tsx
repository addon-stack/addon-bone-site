import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type DebugProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: DebugProps) => {
	return (
		<EntrypointSpec name="debug" type="boolean">
			{children}
		</EntrypointSpec>
	);
};

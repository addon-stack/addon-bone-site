import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type ModeProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: ModeProps) => {
	return (
		<EntrypointSpec name="mode" type={'"development" | "production" | "none"'}>
			{children}
		</EntrypointSpec>
	);
};

import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type IncludeAppProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: IncludeAppProps) => {
	return (
		<EntrypointSpec name="includeApp" type="string[]">
			{children}
		</EntrypointSpec>
	);
};

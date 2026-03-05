import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type ExcludeAppProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: ExcludeAppProps) => {
	return (
		<EntrypointSpec name="excludeApp" type="string[]">
			{children}
		</EntrypointSpec>
	);
};

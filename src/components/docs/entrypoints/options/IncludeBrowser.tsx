import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type IncludeBrowserProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: IncludeBrowserProps) => {
	return (
		<EntrypointSpec name="includeBrowser" type="Browser[]">
			{children}
		</EntrypointSpec>
	);
};

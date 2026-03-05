import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type ExcludeBrowserProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: ExcludeBrowserProps) => {
	return (
		<EntrypointSpec name="excludeBrowser" type="Browser[]">
			{children}
		</EntrypointSpec>
	);
};

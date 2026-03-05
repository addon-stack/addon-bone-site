import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type ManifestVersionProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: ManifestVersionProps) => {
	return (
		<EntrypointSpec name="manifestVersion" type="2 | 3" manifest>
			{children}
		</EntrypointSpec>
	);
};

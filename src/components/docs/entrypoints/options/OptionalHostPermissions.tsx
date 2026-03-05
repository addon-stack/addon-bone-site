import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type OptionalHostPermissionsProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: OptionalHostPermissionsProps) => {
	return (
		<EntrypointSpec name="optionalHostPermissions" type="string[]" manifest>
			{children}
		</EntrypointSpec>
	);
};

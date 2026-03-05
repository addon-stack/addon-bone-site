import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type HostPermissionsProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: HostPermissionsProps) => {
	return (
		<EntrypointSpec name="hostPermissions" type="string[]">
			{children}
		</EntrypointSpec>
	);
};

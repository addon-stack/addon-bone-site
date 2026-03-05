import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type OptionalPermissionsProps = Pick<
	ComponentProps<typeof EntrypointSpec>,
	"children"
>;

export default ({children}: OptionalPermissionsProps) => {
	return (
		<EntrypointSpec
			name="optionalPermissions"
			type="chrome.runtime.ManifestOptionalPermission[]"
			manifest
		>
			{children}
		</EntrypointSpec>
	);
};

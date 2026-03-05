import type {ComponentProps} from "react";

import EntrypointSpec from "../EntrypointSpec";

type PermissionsProps = Pick<ComponentProps<typeof EntrypointSpec>, "children">;

export default ({children}: PermissionsProps) => {
	return (
		<EntrypointSpec
			name="permissions"
			type="chrome.runtime.ManifestPermission[]"
		>
			{children}
		</EntrypointSpec>
	);
};

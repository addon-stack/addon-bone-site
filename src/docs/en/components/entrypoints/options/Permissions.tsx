import {Link} from "@rspress/core/theme";

import {Permissions as BasePermissions} from "@components/docs/entrypoints/options";

export default () => {
	return (
		<BasePermissions>
			Declares required extension permissions. These values are merged and
			deduplicated across background entrypoints, then written to{" "}
			<code>manifest.permissions</code> (field mapping differs between Manifest
			V2 and V3). Learn what each permission enables in{" "}
			<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">
				MDN permissions docs
			</Link>
			.
		</BasePermissions>
	);
};

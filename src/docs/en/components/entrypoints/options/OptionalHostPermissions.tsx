import {OptionalHostPermissions as BaseOptionalHostPermissions} from "@components/docs/entrypoints/options";
import {Link} from "@rspress/core/theme";

export default () => {
	return (
		<BaseOptionalHostPermissions>
			Declares optional host match patterns that can be granted later. In
			Manifest V3, these values are written to{" "}
			<code>manifest.optional_host_permissions</code>. In Manifest V2, they are
			mapped into <code>manifest.optional_permissions</code>. Reference:{" "}
			<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions">
				MDN optional host permissions
			</Link>
			.
		</BaseOptionalHostPermissions>
	);
};

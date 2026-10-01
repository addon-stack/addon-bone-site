import {OptionalPermissions as BaseOptionalPermissions} from "@components/docs/entrypoints/options";
import {Link} from "@rspress/core/theme";

export default () => {
	return (
		<BaseOptionalPermissions>
			Declares permissions that can be requested later at runtime. Addon Bone
			merges and deduplicates these values, then writes them to{" "}
			<code>manifest.optional_permissions</code> (with Manifest V2/V3-specific
			mapping). Reference:{" "}
			<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions">
				MDN optional permissions
			</Link>
			.
		</BaseOptionalPermissions>
	);
};

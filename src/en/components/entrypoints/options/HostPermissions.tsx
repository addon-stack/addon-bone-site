import {HostPermissions as BaseHostPermissions} from "@components/docs/entrypoints/options";
import {Link} from "@rspress/core/theme";

export default () => {
	return (
		<BaseHostPermissions>
			Declares allowed host match patterns (origins) for background network and
			API access. In Manifest V3, these values are written to{" "}
			<code>manifest.host_permissions</code>. In Manifest V2, host patterns are
			mapped into <code>manifest.permissions</code>. Reference:{" "}
			<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions">
				MDN host permissions
			</Link>
			.
		</BaseHostPermissions>
	);
};

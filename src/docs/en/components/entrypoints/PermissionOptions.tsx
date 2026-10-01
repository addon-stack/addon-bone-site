import {
	HostPermissions,
	OptionalHostPermissions,
	OptionalPermissions,
	Permissions,
} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<Permissions>
			Specify the browser API permissions your code uses. For example,{" "}
			<code>tabs</code> is needed to read tab titles. Addon Bone combines
			permissions from included entrypoints in <code>manifest.permissions</code>{" "}
			and removes duplicates. If the list is empty or the option is omitted,
			this entrypoint adds no API permissions.
		</Permissions>
		<OptionalPermissions>
			Specify permissions for optional features the user can enable while the
			extension is running. Addon Bone adds them to{" "}
			<code>manifest.optional_permissions</code>. When the user enables such a
			feature, request the permissions through the browser API and use them
			after approval. If the list is empty or the option is omitted, this
			entrypoint adds no optional API permissions.
		</OptionalPermissions>
		<HostPermissions>
			Specify URL patterns for sites your code needs to access, such as{" "}
			<code>https://api.example.com/*</code>. Addon Bone writes them to{" "}
			<code>manifest.host_permissions</code> for Manifest V3 or{" "}
			<code>manifest.permissions</code> for Manifest V2. If the list is empty or
			the option is omitted, this entrypoint adds no site access.
		</HostPermissions>
		<OptionalHostPermissions>
			Specify site patterns the user can grant access to later. Addon Bone adds
			them to <code>manifest.optional_host_permissions</code> for Manifest V3 or{" "}
			<code>manifest.optional_permissions</code> for Manifest V2. Request access
			through the browser API when the user enables the corresponding feature,
			then work with the site after approval. If the list is empty or the option
			is omitted, this entrypoint adds no optional site access.
		</OptionalHostPermissions>
	</>
);

import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {
	HostPermissions as BaseHostPermissions,
	OptionalHostPermissions as BaseOptionalHostPermissions,
	OptionalPermissions as BaseOptionalPermissions,
	Permissions as BasePermissions,
	Persistent as BasePersistent,
} from "@components/docs/entrypoints/options";
import {Link} from "@rspress/core/theme";

export default () => {
	return (
		<>
			<EntrypointSpec name="name" type="string">
				Service identifier used by <code>getService(name)</code>. When omitted,
				Addon Bone generates the name from the entrypoint file name.
			</EntrypointSpec>
			<EntrypointSpec
				name="init"
				type="(options) => object | function"
				target
				required
			>
				Factory function that creates the service instance in the background
				context. The returned object or class instance becomes the public
				service API exposed through the typed async proxy.
			</EntrypointSpec>
			<EntrypointSpec
				name="main"
				type="(instance, options) => void | Promise<void>"
			>
				Optional hook executed after the service is registered. Use it for
				bootstrap logic, subscriptions, or one-time setup that needs the created
				service instance.
			</EntrypointSpec>
		</>
	);
};

export const ServiceBackgroundOptions = () => {
	return (
		<>
			<BasePersistent>
				Controls persistent behavior for the generated background context
				(relevant for Manifest V2 background page mode).
			</BasePersistent>
			<BasePermissions>
				Declares required extension permissions used by this service. Addon Bone
				merges and deduplicates these values with other background context
				entrypoints, then writes them to <code>manifest.permissions</code>.
				Learn what each permission enables in{" "}
				<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">
					MDN permissions docs
				</Link>
				.
			</BasePermissions>
			<BaseOptionalPermissions>
				Declares permissions that can be requested later at runtime by service
				logic. Addon Bone writes them to{" "}
				<code>manifest.optional_permissions</code> with Manifest V2/V3-specific
				mapping.
			</BaseOptionalPermissions>
			<BaseHostPermissions>
				Declares host match patterns needed by this service. In Manifest V3,
				these values are written to <code>manifest.host_permissions</code>. In
				Manifest V2, host patterns are mapped into{" "}
				<code>manifest.permissions</code>.
			</BaseHostPermissions>
			<BaseOptionalHostPermissions>
				Declares optional host match patterns that service logic can request
				later at runtime. Addon Bone maps them to the correct Manifest V2/V3
				fields.
			</BaseOptionalHostPermissions>
		</>
	);
};

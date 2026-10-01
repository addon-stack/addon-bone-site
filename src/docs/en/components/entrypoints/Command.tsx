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
			<EntrypointSpec name="name" type="string" manifest>
				Command identifier written to <code>manifest.commands</code> and used by
				the browser command event. When omitted, Addon Bone generates a stable
				name from the entrypoint file name.
			</EntrypointSpec>
			<EntrypointSpec name="description" type="string" manifest>
				Human-readable command label written to{" "}
				<code>manifest.commands[command].description</code>. Localization keys
				are resolved through Addon Bone locale handling.
			</EntrypointSpec>
			<EntrypointSpec name="global" type="boolean" manifest>
				Marks the command shortcut as global in the generated manifest when the
				target browser supports global extension commands.
			</EntrypointSpec>
			<EntrypointSpec name="defaultKey" type="string" manifest>
				Default suggested keyboard shortcut for the command. At least one
				suggested key option must be declared. Regular shortcuts use{" "}
				<code>Ctrl</code> or <code>Alt</code>, optional <code>Shift</code>, and
				a supported key. Use <code>macKey</code> for macOS-specific{" "}
				<code>Command</code>, <code>MacCtrl</code>, or <code>Option</code>{" "}
				shortcuts.
			</EntrypointSpec>
			<EntrypointSpec name="windowsKey" type="string" manifest>
				Windows-specific suggested shortcut written to{" "}
				<code>suggested_key.windows</code>.
			</EntrypointSpec>
			<EntrypointSpec name="macKey" type="string" manifest>
				macOS-specific suggested shortcut written to{" "}
				<code>suggested_key.mac</code>.
			</EntrypointSpec>
			<EntrypointSpec name="chromeosKey" type="string" manifest>
				ChromeOS-specific suggested shortcut written to{" "}
				<code>suggested_key.chromeos</code>.
			</EntrypointSpec>
			<EntrypointSpec name="linuxKey" type="string" manifest>
				Linux-specific suggested shortcut written to{" "}
				<code>suggested_key.linux</code>.
			</EntrypointSpec>
			<EntrypointSpec
				name="execute"
				type="(tab, options) => void | Promise<void>"
				target
				required
			>
				Runtime handler executed when the command shortcut is pressed. The first
				argument is the active tab when the browser provides one; it can be{" "}
				<code>undefined</code>. The second argument contains the resolved
				command options.
			</EntrypointSpec>
		</>
	);
};

export const CommandBackgroundOptions = () => {
	return (
		<>
			<BasePersistent>
				Controls persistent behavior for the generated background context
				(relevant for Manifest V2 background page mode).
			</BasePersistent>
			<BasePermissions>
				Declares required extension permissions used by this command handler.
				Addon Bone merges and deduplicates these values with other background
				context entrypoints, then writes them to{" "}
				<code>manifest.permissions</code>. Learn what each permission enables in{" "}
				<Link href="https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">
					MDN permissions docs
				</Link>
				.
			</BasePermissions>
			<BaseOptionalPermissions>
				Declares permissions that can be requested later at runtime by command
				logic. Addon Bone writes them to{" "}
				<code>manifest.optional_permissions</code> with Manifest V2/V3-specific
				mapping.
			</BaseOptionalPermissions>
			<BaseHostPermissions>
				Declares host match patterns needed by this command handler. In Manifest
				V3, these values are written to <code>manifest.host_permissions</code>.
				In Manifest V2, host patterns are mapped into{" "}
				<code>manifest.permissions</code>.
			</BaseHostPermissions>
			<BaseOptionalHostPermissions>
				Declares optional host match patterns that command logic can request
				later at runtime. Addon Bone maps them to the correct Manifest V2/V3
				fields.
			</BaseOptionalHostPermissions>
		</>
	);
};

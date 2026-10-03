import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="name" type="string" manifest>
			Sets the command name in <code>manifest.commands</code>. If omitted, Addon
			Bone takes the name from the entrypoint file or directory. Set it
			explicitly if it should stay the same after you rename the file. Duplicate
			names among included commands stop the build. For the button command, use{" "}
			<code>_execute_action</code>: Addon Bone replaces it with{" "}
			<code>_execute_browser_action</code> in Manifest V2.
		</EntrypointSpec>
		<EntrypointSpec name="description" type="string" manifest>
			Sets the description users see in the browser's shortcut settings. Use
			plain text or a locale key, such as <code>@commands.showTab</code>. If
			omitted, Addon Bone writes the regular command's name; no default
			description is added for <code>_execute_action</code>.
		</EntrypointSpec>
		<EntrypointSpec name="global" type="boolean" manifest>
			With <code>true</code>, the shortcut works even when Chrome, Chromium,
			Edge, or Opera does not have focus. With <code>false</code> or when
			omitted, it works when the browser has focus. In Firefox and Safari, Addon
			Bone warns and continues the build; the command remains limited to the
			browser. See <a href="#global-shortcuts">Global Shortcuts</a> for
			supported shortcuts and platform restrictions.
		</EntrypointSpec>
		<EntrypointSpec name="defaultKey" type="string" manifest>
			Sets the suggested shortcut for platforms without a separate value, for
			example <code>Ctrl+Shift+Y</code>. If omitted, only platforms with an
			explicit option get an initial shortcut. Every command needs at least one
			shortcut option; the user can change the assignment in the browser.
		</EntrypointSpec>
		<EntrypointSpec name="windowsKey" type="string" manifest>
			Sets the Windows shortcut and is written to{" "}
			<code>suggested_key.windows</code>. On Windows, it replaces{" "}
			<code>defaultKey</code>; if omitted, <code>defaultKey</code> is used when
			set.
		</EntrypointSpec>
		<EntrypointSpec name="macKey" type="string" manifest>
			Sets the macOS shortcut and is written to <code>suggested_key.mac</code>.
			Chromium also accepts <code>Command</code>, <code>MacCtrl</code>, and{" "}
			<code>Option</code> here; Firefox accepts the first two, but use{" "}
			<code>Alt</code> instead of <code>Option</code>. If omitted,{" "}
			<code>defaultKey</code> is used when set; the browser treats{" "}
			<code>Ctrl</code> as <code>Command</code>. For the Control key, use{" "}
			<code>MacCtrl</code>.
		</EntrypointSpec>
		<EntrypointSpec name="chromeosKey" type="string" manifest>
			Sets the shortcut for Chrome on ChromeOS and is written to{" "}
			<code>suggested_key.chromeos</code>. On ChromeOS, it replaces{" "}
			<code>defaultKey</code>; if omitted, <code>defaultKey</code> is used when
			set. You can use the <code>Search</code> modifier here, for example{" "}
			<code>Search+Shift+Y</code>. Chromium builds allow no more than two
			modifiers; this option is not supported with <code>global: true</code>.
		</EntrypointSpec>
		<EntrypointSpec name="linuxKey" type="string" manifest>
			Sets the Linux shortcut and is written to <code>suggested_key.linux</code>
			. On Linux, it replaces <code>defaultKey</code>; if omitted,{" "}
			<code>defaultKey</code> is used when set.
		</EntrypointSpec>
		<EntrypointSpec
			name="execute"
			type="(tab, options) => void | Promise<void>"
			required
			target
		>
			Performs the action when the command is called. Receives the tab, if the
			browser provided one, and the current file's options with the final
			command name. You can use <code>async</code> / <code>await</code>. The
			handler is required; repeated calls do not wait for previous calls to
			finish.
		</EntrypointSpec>
	</>
);

export const CommandBackgroundOptions = () => (
	<Persistent>
		With <code>true</code>, adds <code>background.persistent: true</code> to the
		Manifest V2 manifest. This setting applies to the entire background,
		including other background entrypoints. In the current version,{" "}
		<code>false</code> and omitted values are not written to the manifest: the
		background page remains persistent by default in Manifest V2. The option
		does not apply to Manifest V3 and does not prevent the browser from stopping
		the background context.
	</Persistent>
);

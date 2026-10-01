import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Sets the name calling code uses to get the service through{" "}
			<code>getService(name)</code>. If omitted, Addon Bone takes the name from
			the entrypoint file or directory. Set a unique name explicitly if it needs
			to stay the same after you rename the file.
		</EntrypointSpec>
		<EntrypointSpec
			name="init"
			type="(options) => object | function"
			required
			target
		>
			Creates the service API: return an object, a class instance, or a
			function. Receives the entrypoint options and runs synchronously. If a
			method needs data from storage or the network, wait for it inside that
			method. This option is required.
		</EntrypointSpec>
		<EntrypointSpec
			name="main"
			type="(instance, options) => void | Promise<void>"
		>
			Runs actions when the service starts. Receives the created instance and
			options after registration. You can subscribe to events or start loading
			data. Service methods may be called before asynchronous work in{" "}
			<code>main</code> finishes, so they must wait for the data they need. If
			omitted, the service has no separate startup handler.
		</EntrypointSpec>
	</>
);

export const ServiceBackgroundOptions = () => (
	<>
		<Persistent>
			Controls whether the background page in Manifest V2 runs continuously.
			This setting does not apply to the service worker in Manifest V3: the
			browser can still stop it when it is idle.
		</Persistent>
	</>
);

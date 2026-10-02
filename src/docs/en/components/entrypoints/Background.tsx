import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";
import {Persistent} from "@components/docs/entrypoints/options";

export default () => (
	<>
		<EntrypointSpec name="main" type="(options) => void | Promise<void>" target>
			Runs actions each time the background starts. Receives the options
			declared in this file. You can use <code>async</code> / <code>await</code>
			, for example to read settings or get data through a browser API. You can
			also register event listeners. If omitted, there is no separate startup
			handler.
		</EntrypointSpec>
		<Persistent>
			With <code>true</code>, adds <code>background.persistent: true</code> to
			the Manifest V2 manifest. This setting applies to the entire background,
			including other background entrypoints. In the current version,{" "}
			<code>false</code> and an omitted value are not written to the manifest:
			the Manifest V2 background page remains persistent by default. In Manifest
			V3, this option does not apply and does not prevent the browser from
			stopping the background context.
		</Persistent>
	</>
);

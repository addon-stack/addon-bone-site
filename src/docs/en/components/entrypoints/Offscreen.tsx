import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Sets the API name used by <code>getOffscreen(name)</code>. If omitted,
			Addon Bone derives it from the entrypoint file or directory. Set the name
			explicitly if calls need to keep working after a file is renamed.
		</EntrypointSpec>
		<EntrypointSpec
			name="init"
			type="(options) => object | function"
			required
			target
		>
			Creates the API in the hidden document: return an object, a class
			instance, or a function. Receives entrypoint options and runs
			synchronously each time the document is created. Perform asynchronous
			operations inside API methods. This option is required.
		</EntrypointSpec>
		<EntrypointSpec
			name="main"
			type="(instance, options) => void | Promise<void>"
		>
			Runs after the API is registered. Receives the created instance and
			entrypoint options. Use it to prepare resources that need the instance.
			The handler runs again whenever the document is recreated. Addon Bone
			waits for <code>main</code> to finish before running <code>render</code>.
			If omitted, no separate startup handler runs.
		</EntrypointSpec>
		<EntrypointSpec name="reasons" type="OffscreenReason | OffscreenReason[]">
			Specifies the task that needs an Offscreen document in Chrome with
			Manifest V3. Pass one <code>OffscreenReason</code> value, an array, or the
			corresponding enum strings, such as <code>"BLOBS"</code>. If omitted,
			Addon Bone passes <code>DOM_PARSER</code>. Choose the appropriate reason
			explicitly for a different task:
			<ul>
				<li>
					<code>Blobs</code> — works with Blob objects, including{" "}
					<code>URL.createObjectURL()</code>.
				</li>
				<li>
					<code>DOMParser</code> — parses HTML or XML with DOMParser.
				</li>
				<li>
					<code>Clipboard</code> — works with the clipboard.
				</li>
				<li>
					<code>Workers</code> — creates Web Workers.
				</li>
				<li>
					<code>AudioPlayback</code> — plays audio.
				</li>
				<li>
					<code>IframeScripting</code> — changes an embedded iframe's content.
				</li>
				<li>
					<code>DOMScraping</code> — reads an embedded iframe's DOM.
				</li>
				<li>
					<code>UserMedia</code> — works with getUserMedia streams.
				</li>
				<li>
					<code>DisplayMedia</code> — works with getDisplayMedia streams.
				</li>
				<li>
					<code>WebRTC</code> — works with WebRTC.
				</li>
				<li>
					<code>LocalStorage</code> — accesses window.localStorage.
				</li>
				<li>
					<code>MatchMedia</code> — uses window.matchMedia.
				</li>
				<li>
					<code>Geolocation</code> — uses navigator.geolocation.
				</li>
				<li>
					<code>BatteryStatus</code> — uses navigator.getBattery.
				</li>
				<li>
					<code>Testing</code> — for testing only.
				</li>
			</ul>
			Combine reasons if the document performs several tasks. The{" "}
			<code>AudioPlayback</code> value allows Chrome to close the document after
			30 seconds without audio playback. In Manifest V2 and Firefox, reasons do
			not control hidden document creation. They also do not add permissions or
			ensure that the browser supports the chosen Web API.
		</EntrypointSpec>
		<EntrypointSpec name="justification" type="string">
			Explains to the browser why an Offscreen document is needed in Chrome with
			Manifest V3. Describe what the document will do, such as resizing images
			with canvas. If omitted, Addon Bone passes <code>"Just for testing"</code>
			; provide your own explanation for a working extension. In Manifest V2 and
			Firefox, this string is not used to create the document.
		</EntrypointSpec>
	</>
);

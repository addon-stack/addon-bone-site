import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => {
	return (
		<>
			<EntrypointSpec name="name" type="string">
				Offscreen identifier used by <code>getOffscreen(name)</code>. When
				omitted, Addon Bone generates the name from the entrypoint file name.
			</EntrypointSpec>
			<EntrypointSpec
				name="init"
				type="(options) => object | function"
				target
				required
			>
				Factory function that creates the offscreen instance in the hidden
				document context. The returned object or class instance becomes the
				public offscreen API exposed through the typed async proxy.
			</EntrypointSpec>
			<EntrypointSpec
				name="main"
				type="(instance, options) => void | Promise<void>"
			>
				Optional hook executed after the offscreen instance is registered. Use
				it for bootstrap logic or one-time setup that needs the created
				instance.
			</EntrypointSpec>
			<EntrypointSpec name="reasons" type="OffscreenReason | OffscreenReason[]">
				Reason or reasons used when Addon Bone creates a native Chrome MV3
				offscreen document. Choose values that match the DOM or browser feature
				the hidden document needs. Supported values:
				<ul>
					<li>
						<code>DOMParser</code> — needs the <code>DOMParser</code> API.
					</li>
					<li>
						<code>Blobs</code> — interacts with <code>Blob</code> objects
						(including <code>URL.createObjectURL()</code>).
					</li>
					<li>
						<code>Clipboard</code> — uses clipboard APIs such as{" "}
						<code>navigator.clipboard</code>.
					</li>
					<li>
						<code>Workers</code> — spawns Web Workers.
					</li>
					<li>
						<code>AudioPlayback</code> — plays audio.
					</li>
					<li>
						<code>IframeScripting</code> — embeds and scripts an iframe to
						modify its content.
					</li>
					<li>
						<code>DOMScraping</code> — embeds an iframe and scrapes its DOM.
					</li>
					<li>
						<code>UserMedia</code> — uses <code>getUserMedia()</code> streams.
					</li>
					<li>
						<code>DisplayMedia</code> — uses <code>getDisplayMedia()</code>{" "}
						streams.
					</li>
					<li>
						<code>WebRTC</code> — uses WebRTC APIs.
					</li>
					<li>
						<code>LocalStorage</code> — accesses{" "}
						<code>window.localStorage</code>.
					</li>
					<li>
						<code>MatchMedia</code> — uses <code>window.matchMedia</code>.
					</li>
					<li>
						<code>Geolocation</code> — uses <code>navigator.geolocation</code>.
					</li>
					<li>
						<code>BatteryStatus</code> — uses{" "}
						<code>navigator.getBattery()</code>.
					</li>
				</ul>
			</EntrypointSpec>
			<EntrypointSpec name="justification" type="string">
				Human-readable explanation passed to native Chrome MV3 offscreen
				creation. Keep it specific to the hidden document task.
			</EntrypointSpec>
		</>
	);
};

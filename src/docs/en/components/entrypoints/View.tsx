import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => (
	<>
		<EntrypointSpec name="as" type="string">
			Sets the name of the generated HTML file and its build entry. If omitted,
			Addon Bone uses the entrypoint file or directory name. The final naming
			rules depend on the entrypoint; see its Build Output section.
		</EntrypointSpec>
		<EntrypointSpec name="title" type="string">
			Sets the HTML document title. If omitted, Addon Bone uses the current app
			name with capitalization and spaces, such as <code>My App</code> for{" "}
			<code>my-app</code>.
		</EntrypointSpec>
		<EntrypointSpec name="template" type="string">
			Sets the path to an HTML template, relative to the entrypoint file. Use it
			when the document needs custom markup. If omitted, Addon Bone creates HTML
			with the entrypoint script connected.
		</EntrypointSpec>
		<EntrypointSpec name="tags" type="string | object | array">
			Adds script or link tags to HTML. A string sets the resource path; an
			object with <code>path</code> and <code>attributes</code> configures the
			tag; an array adds several resources. For plain paths, the tag type is
			chosen from the .js or .css extension. If omitted, no additional tags are
			added.
		</EntrypointSpec>
		<EntrypointSpec name="links" type="string | object | array">
			Adds link tags, for example for stylesheets. Pass a path string, an object
			with <code>path</code> and optional <code>attributes</code>, or an array
			of these entries. If omitted, no additional link tags are added.
		</EntrypointSpec>
		<EntrypointSpec name="scripts" type="string | object | array">
			Adds script tags for additional resources. Pass a path string, an object
			with <code>path</code> and optional <code>attributes</code>, or an array
			of these entries. If omitted, Addon Bone connects only the entrypoint's
			own scripts and dependencies.
		</EntrypointSpec>
		<EntrypointSpec
			name="metas"
			type="HtmlMetaTagOptions | HtmlMetaTagOptions[]"
		>
			Adds meta tags to the <code>head</code> of the generated HTML, such as a
			page description. Pass an object with non-empty <code>attributes</code>:
			set the meta tag's attributes there, such as <code>name</code> and{" "}
			<code>content</code>. Use an array of these objects for several tags. If
			omitted, no additional meta tags are added.
		</EntrypointSpec>
		<EntrypointSpec name="csp" type="object" manifest>
			Adds Content Security Policy settings for extension pages:{" "}
			<code>wasm</code> allows WebAssembly, and <code>sources</code> sets the
			sources for images, connections, and other resources. If omitted, this
			file adds no CSP settings of its own. Addon Bone combines settings from
			included documents into a shared manifest policy that applies to all
			extension pages.
		</EntrypointSpec>
	</>
);

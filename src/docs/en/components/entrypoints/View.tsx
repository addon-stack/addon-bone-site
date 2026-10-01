import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => {
	return (
		<>
			<EntrypointSpec name="as" type="string">
				Custom view alias used for the generated HTML file, chunk name, and
				internal view identity. Use it when the file name should not become the
				public generated view name.
			</EntrypointSpec>
			<EntrypointSpec name="title" type="string">
				Document title written into the generated HTML file. When omitted, Addon
				Bone uses the current app name.
			</EntrypointSpec>
			<EntrypointSpec name="template" type="string">
				Path to a custom HTML template, resolved relative to the entrypoint
				file. Use it when the generated view needs custom markup, meta tags, or
				a specific HTML shell.
			</EntrypointSpec>
			<EntrypointSpec name="tags" type="string | object | array">
				Additional link or script tags injected into the generated HTML file.
				This is passed to the underlying HTML tags plugin for the view.
			</EntrypointSpec>
			<EntrypointSpec name="links" type="string | object | array">
				Additional link tags injected into the generated HTML file.
			</EntrypointSpec>
			<EntrypointSpec name="scripts" type="string | object | array">
				Additional script tags injected into the generated HTML file.
			</EntrypointSpec>
			<EntrypointSpec name="csp" type="object">
				Content Security Policy contribution for extension pages. Addon Bone
				merges CSP from all view entrypoints into one generated manifest policy,
				so a value declared in one page, popup, sidebar, or offscreen entrypoint
				affects every extension page in the final build.
			</EntrypointSpec>
			<EntrypointSpec name="metas" type="string | object | array">
				Additional meta tags injected into the generated HTML file.
			</EntrypointSpec>
		</>
	);
};

import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default () => (
	<>
		<EntrypointSpec name="name" type="string">
			Sets the page name used by <code>getPageUrl(name)</code>. If omitted,
			Addon Bone uses the entrypoint file or directory name. Set a unique name
			explicitly to keep links working after you rename the file. Set the HTML
			filename separately through <code>as</code>.
		</EntrypointSpec>
		<EntrypointSpec name="matches" type="string[]" manifest>
			Makes the HTML file accessible from websites and adds it to{" "}
			<code>web_accessible_resources</code>. In Manifest V3, access is limited
			to the listed site patterns. In Manifest V2, the field stores only
			resource paths, so these patterns do not restrict access. If omitted, Page
			does not add its HTML to resources accessible from websites. This option
			is not needed to open the page from the extension itself.
		</EntrypointSpec>
	</>
);

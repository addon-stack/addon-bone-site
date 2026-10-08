import EntrypointSpec from "@components/docs/entrypoints/EntrypointSpec";

export default ({
	primary = false,
	containerExamplesHref,
}: {
	primary?: boolean;
	containerExamplesHref?: string;
}) => (
	<>
		<EntrypointSpec
			name="render"
			type="ViewRenderValue | ViewRenderHandler"
			target={primary}
		>
			Sets the container's content: a value or a function that returns it
			synchronously, without a Promise. The function receives the current file's
			options without <code>render</code> and <code>container</code>. In React,
			it runs as a component and can use hooks. If omitted, Addon Bone does not
			create a UI container; the template markup remains in the document.
		</EntrypointSpec>
		<EntrypointSpec
			name="container"
			type="ViewContainerTag | ViewContainerOptions | ViewContainerFactory"
		>
			Sets the container for the <code>render</code> result. Pass a tag name, an
			object with <code>tagName</code> and element properties, or a function
			that returns an element, a tag name, or such an object. The function
			receives the same options and can be asynchronous. The default is a new{" "}
			<code>div</code>. Addon Bone places the container at the start of{" "}
			<code>document.body</code> before mounting the content.
			{containerExamplesHref && (
				<>
					{" "}
					See the <a href={containerExamplesHref}>container section</a> for
					examples of container properties and factories.
				</>
			)}
		</EntrypointSpec>
	</>
);

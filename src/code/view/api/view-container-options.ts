export type ViewContainerOptions = {
	[Tag in ViewContainerTag]: {tagName: Tag} & Exclude<
		Optional<PickNonFunctionProperties<HTMLElementTagNameMap[Tag]>>,
		"id"
	>;
}[ViewContainerTag];
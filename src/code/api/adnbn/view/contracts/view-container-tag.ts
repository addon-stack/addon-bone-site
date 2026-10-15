export type ViewContainerTag = Exclude<
	keyof HTMLElementTagNameMap,
	"html" | "body"
>;
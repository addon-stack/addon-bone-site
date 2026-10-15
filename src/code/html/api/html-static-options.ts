type HtmlStaticOptions<T> = T extends (...args: never[]) => unknown
	? never
	: T extends (infer Item)[]
		? HtmlStaticOptions<Item>[]
		: T extends object
			? {[Key in keyof T]: HtmlStaticOptions<T[Key]>}
			: T;
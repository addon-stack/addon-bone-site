export type CspSourceValue =
	| CspSource
	| `${CspSource}`
	| (string & Record<never, never>);
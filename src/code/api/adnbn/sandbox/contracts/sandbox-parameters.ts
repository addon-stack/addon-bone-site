export type SandboxParameters = {url: string} & Pick<
	SandboxConfig,
	"readyTimeout" | "requestTimeout" | "removeOnRequestTimeout"
>;
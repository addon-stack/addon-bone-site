import {definePage, getEntrypointAssets} from "adnbn";

export default definePage({
	title: "Entrypoint assets",
	container: "pre",
	render: () => JSON.stringify(getEntrypointAssets(), null, 2),
});
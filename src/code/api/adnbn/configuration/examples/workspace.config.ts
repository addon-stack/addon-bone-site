import {defineConfig, Workspace} from "adnbn";

export default defineConfig({
	workspace: Workspace.Multi,
	appsDir: "apps",
	appSrcDir: "src",
	sharedDir: "shared",
});
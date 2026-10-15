export type OptionalConfig = Omit<Partial<Config>, "lang" | "workspace"> & {
	lang?: Language | `${Language}`;
	workspace?: Workspace | `${Workspace}`;
};

export type UserConfig = Omit<OptionalConfig, "configFile" | "command">;
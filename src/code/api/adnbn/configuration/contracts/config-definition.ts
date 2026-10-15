export type UserConfigCallback = (config: ReadonlyConfig) => UserConfig;

export type ConfigDefinition = UserConfigCallback | UserConfig;
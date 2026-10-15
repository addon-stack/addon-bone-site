export interface CommandConfig extends BackgroundConfig {
	name: string;
	description?: string;
	global?: boolean;
	defaultKey?: string;
	windowsKey?: string;
	macKey?: string;
	chromeosKey?: string;
	linuxKey?: string;
}
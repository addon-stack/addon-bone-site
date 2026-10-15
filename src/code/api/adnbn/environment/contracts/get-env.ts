declare function getEnv<T extends string, D = undefined>(
	key: string,
	defaults?: D,
): T | D;
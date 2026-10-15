interface CommonOptions {
	append?: boolean;
	useHash?: boolean;
	addHash?: AddHashFunction;
	hash?: boolean | string | AddHashFunction;
	usePublicPath?: boolean;
	addPublicPath?: AddPublicPathFunction;
	publicPath?: boolean | string | AddPublicPathFunction;
}
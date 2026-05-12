export type ArticleSnapshot = {
	title: string;
	text: string;
	url: string;
};

// Shared by every strategy implementation and by the generated service proxy.
// Keeping this interface stable keeps getService("article") stable for callers.
export interface ArticleService {
	parse(): Promise<ArticleSnapshot>;
}

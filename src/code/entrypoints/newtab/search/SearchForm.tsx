import React, {type SubmitEvent} from "react";

import {searchInCurrentTab} from "adnbn/browser";

const SearchForm = () => {
	const search = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();
		const text = String(
			new FormData(event.currentTarget).get("query") ?? "",
		).trim();

		if (text) {
			await searchInCurrentTab(text);
		}
	};

	return (
		<search>
			<form onSubmit={search}>
				<label>
					Search the web: <input type="search" name="query" required />
				</label>
				<button type="submit">Search</button>
			</form>
		</search>
	);
};

export default SearchForm;
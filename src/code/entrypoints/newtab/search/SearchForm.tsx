import {searchInCurrentTab} from "adnbn/browser";

import React, {type SubmitEvent} from "react";

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
		<form role="search" onSubmit={search}>
			<label>
				Search the web: <input type="search" name="query" required />
			</label>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
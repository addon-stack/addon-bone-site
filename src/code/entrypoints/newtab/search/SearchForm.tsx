import {browser} from "adnbn/browser";

import React, {type SubmitEvent, useState} from "react";

export default function SearchForm() {
	const [error, setError] = useState("");

	const search = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const text = String(data.get("query") ?? "").trim();
		if (!text) {
			return;
		}

		setError("");
		try {
			await browser().search.query({
				text,
				disposition: "CURRENT_TAB",
			});
		} catch (error) {
			setError("Could not start the search. Please try again.");
			console.error(error);
		}
	};

	return (
		<form role="search" onSubmit={search}>
			<label>
				Search the web: <input type="search" name="query" required />
			</label>
			<button type="submit">Search</button>
			{error && <p role="alert">{error}</p>}
		</form>
	);
}
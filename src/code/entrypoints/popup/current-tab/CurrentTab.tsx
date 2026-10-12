import {getActiveTab} from "adnbn/browser";

import React, {useActionState} from "react";

const CurrentTab = () => {
	const [message, load, isPending] = useActionState(async () => {
		try {
			const tab = await getActiveTab();

			return tab.title ?? "Untitled tab";
		} catch {
			return "Could not read the current tab.";
		}
	}, "");

	return (
		<form action={load}>
			<button type="submit" disabled={isPending}>
				{isPending ? "Loading…" : "Read current tab"}
			</button>
			<p role="status">{message}</p>
		</form>
	);
};

export default CurrentTab;
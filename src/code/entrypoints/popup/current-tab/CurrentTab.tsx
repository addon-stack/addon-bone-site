import React, {useActionState} from "react";

import {getActiveTab} from "adnbn/browser";

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
			<output>{message}</output>
		</form>
	);
};

export default CurrentTab;
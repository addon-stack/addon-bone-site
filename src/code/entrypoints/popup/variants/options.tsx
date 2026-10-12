import {changePopup, getPopups, type PopupAlias} from "adnbn";

import React, {useActionState} from "react";

export default () => {
	const [message, apply, isPending] = useActionState(
		async (_message: string, alias: PopupAlias) => {
			try {
				await changePopup(alias);
				return "Popup selected.";
			} catch {
				return "Could not change the popup.";
			}
		},
		"",
	);

	return (
		<form>
			{[...getPopups().keys()].map((alias) => (
				<button
					key={alias}
					formAction={() => apply(alias)}
					disabled={isPending}
				>
					{alias}
				</button>
			))}
			<p role="status">{isPending ? "Applying…" : message}</p>
		</form>
	);
};
import React, {useActionState} from "react";

import {changePopup, getPopups, type PopupAlias} from "adnbn";

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
					type="submit"
					key={alias}
					formAction={() => apply(alias)}
					disabled={isPending}
				>
					{alias}
				</button>
			))}
			<output>{isPending ? "Applying…" : message}</output>
		</form>
	);
};
import React from "react";

import {StorageStatus} from "adnbn/storage";
import {useStorage} from "adnbn/storage/react";

const SettingsForm = () => {
	const compact = useStorage({
		key: "settings.compact",
		defaultValue: false,
	});

	if (compact.status === StorageStatus.Loading) {
		return <p>Loading settings…</p>;
	}
	if (compact.status === StorageStatus.Error) {
		return <p>Could not load settings.</p>;
	}

	const save = async (value: boolean) => {
		try {
			await compact.set(value);
		} catch (error) {
			console.error("Could not save settings:", error);
		}
	};

	return (
		<section>
			<h1>Settings</h1>
			<label>
				<input
					type="checkbox"
					checked={compact.value}
					disabled={compact.isMutating}
					onChange={async (event) => {
						await save(event.currentTarget.checked);
					}}
				/>
				Compact interface
			</label>
			<p>Layout: {compact.value ? "Compact" : "Comfortable"}</p>
			{compact.mutationError !== undefined && (
				<p role="alert">Could not save settings. Try again.</p>
			)}
		</section>
	);
};

export default SettingsForm;
import {
	HostPermissions,
	Main,
	OptionalHostPermissions,
	OptionalPermissions,
	Permissions,
	Persistent,
} from "./options";

export default function Background() {
	return (
		<>
			<Persistent />
			<Permissions />
			<OptionalPermissions />
			<HostPermissions />
			<OptionalHostPermissions />
			<Main />
		</>
	);
}

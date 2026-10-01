import {
	BackgroundMain,
	HostPermissions,
	OptionalHostPermissions,
	OptionalPermissions,
	Permissions,
	Persistent,
} from "./options";

export default () => {
	return (
		<>
			<Persistent />
			<Permissions />
			<OptionalPermissions />
			<HostPermissions />
			<OptionalHostPermissions />
			<BackgroundMain />
		</>
	);
};

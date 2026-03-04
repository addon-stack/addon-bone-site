import Persistent from "./Persistent";
import Permissions from "./Permissions";
import OptionalPermissions from "./OptionalPermissions";
import HostPermissions from "./HostPermissions";
import OptionalHostPermissions from "./OptionalHostPermissions";
import Main from "./Main";

export default function BackgroundOptions() {
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

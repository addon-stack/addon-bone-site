import PropertySpec, {type PropertySpecProps} from "@components/PropertySpec";
import ManifestBadge from "./ManifestBadge";
import TargetBadge from "./TargetBadge";

export interface EntrypointSpecProps extends PropertySpecProps {
	manifest?: boolean;
	target?: boolean;
}

export default (props: EntrypointSpecProps) => {
	const {manifest = false, target = false, header, ...rest} = props;

	return (
		<PropertySpec
			{...rest}
			header={
				<>
					{manifest && <ManifestBadge />}
					{manifest && target && " "}
					{target && <TargetBadge />}
					{header && <> {header}</>}
				</>
			}
		/>
	);
};

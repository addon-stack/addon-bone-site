import {Badge} from "@rspress/core/theme";
import {useI18n} from "@rspress/core/runtime";

import PropertySpec, {type PropertySpecProps} from "@components/PropertySpec";

export interface EntrypointSpecProps extends PropertySpecProps {
	target?: boolean;
}

type EntrypointSpecI18n = {
	target_handler_badge: string;
};

export default (props: EntrypointSpecProps) => {
	const {target = false, header, ...rest} = props;
	const t = useI18n<EntrypointSpecI18n>();

	return (
		<PropertySpec
			{...rest}
			header={
				<>
					{header}
					{target ? (
						<Badge text={t("target_handler_badge")} type="info" outline />
					) : null}
				</>
			}
		/>
	);
};

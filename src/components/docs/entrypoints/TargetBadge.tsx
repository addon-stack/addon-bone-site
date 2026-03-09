import PropertyBadge from "@components/PropertyBadge";
import {useI18n} from "@rspress/core/runtime";

type TargetBadgeI18n = {
	target_badge: string;
};

export default () => {
	const t = useI18n<TargetBadgeI18n>();

	return <PropertyBadge type="tip" text={t("target_badge")} outline />;
};

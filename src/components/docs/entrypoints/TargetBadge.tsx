import {useI18n} from "@rspress/core/runtime";
import {Badge} from "@rspress/core/theme";

type TargetBadgeI18n = {
	target_badge: string;
};

export default () => {
	const t = useI18n<TargetBadgeI18n>();

	return <Badge type="info" text={t("target_badge")} outline />;
};

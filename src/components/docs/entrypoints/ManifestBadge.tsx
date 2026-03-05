import {useI18n} from "@rspress/core/runtime";
import {Badge} from "@rspress/core/theme";

type ManifestBadgeI18n = {
	manifest_badge: string;
};

export default () => {
	const t = useI18n<ManifestBadgeI18n>();

	return <Badge type="warning" text={t("manifest_badge")} outline />;
};

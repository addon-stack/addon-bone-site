import PropertyBadge from "@components/PropertyBadge";
import {useI18n} from "@rspress/core/runtime";

type ManifestBadgeI18n = {
	manifest_badge: string;
};

export default () => {
	const t = useI18n<ManifestBadgeI18n>();

	return <PropertyBadge type="warning" text={t("manifest_badge")} outline />;
};

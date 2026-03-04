import type {ReactNode} from "react";

import {Badge} from "@rspress/core/theme";
import {useI18n} from "@rspress/core/runtime";

import styles from "./property-spec.scss";

interface PropertySpecProps {
	name: string;
	type: string;
	required?: boolean;
	children: ReactNode;
}

type PropertySpecI18n = {
	required_badge: string;
};

export default function PropertySpec({
	name,
	type,
	required = false,
	children,
}: PropertySpecProps) {
	const t = useI18n<PropertySpecI18n>();

	return (
		<div className={styles["rp-doc-option-item"]}>
			<div className={styles["rp-doc-option-item__header"]}>
				<h4 className={styles["rp-doc-option-item__name"]}>
					<code>{name}</code>
				</h4>
				<Badge text={type} type="tip" outline />
				{required && <Badge type="danger" text={t("required_badge")} outline />}
			</div>
			{children}
		</div>
	);
}

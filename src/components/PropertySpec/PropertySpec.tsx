import DocHeading from "@components/DocHeading";
import {useI18n} from "@rspress/core/runtime";
import {Badge} from "@rspress/core/theme";
import type {ReactNode} from "react";

import styles from "./property-spec.scss";

interface PropertySpecProps {
	name: string;
	type: string;
	required?: boolean;
	toc?: boolean;
	header?: ReactNode;
	children: ReactNode;
}

type PropertySpecI18n = {
	required_badge: string;
};

export default (props: PropertySpecProps) => {
	const {name, type, required = false, toc = false, header, children} = props;

	const t = useI18n<PropertySpecI18n>();

	return (
		<div className={styles["rp-property-spec"]}>
			<div className={styles["rp-property-spec__header"]}>
				<DocHeading
					className={styles["rp-property-spec__name"]}
					level={3}
					toc={toc}
					id={name}
				>
					{name}
				</DocHeading>
				<Badge text={type} type="tip" outline />
				{required && <Badge type="danger" text={t("required_badge")} outline />}
				{header}
			</div>
			<p className={styles["rp-property-spec__content"]}>{children}</p>
		</div>
	);
};

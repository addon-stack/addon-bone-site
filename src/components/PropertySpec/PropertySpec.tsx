import type {ComponentProps, ReactNode} from "react";

import DocHeading from "@components/DocHeading";
import PropertyBadge from "@components/PropertyBadge";

import {useI18n} from "@rspress/core/runtime";

import styles from "./property-spec.scss";

export interface PropertySpecProps extends ComponentProps<"div"> {
	name: string;
	type: string;
	required?: boolean;
	toc?: boolean;
	header?: ReactNode;
}

type PropertySpecI18n = {
	required_badge: string;
};

export default (props: PropertySpecProps) => {
	const {
		name,
		type,
		required = false,
		toc = false,
		header,
		children,
		...rest
	} = props;

	const t = useI18n<PropertySpecI18n>();

	return (
		<div className={styles["rp-property-spec"]} {...rest}>
			<div className={styles["rp-property-spec__header"]}>
				<DocHeading
					className={styles["rp-property-spec__name"]}
					level={3}
					toc={toc}
					id={name}
				>
					{name}
				</DocHeading>
				<code className={styles["rp-property-spec__type"]}>{type}</code>
				{required && (
					<PropertyBadge type="danger" text={t("required_badge")} outline />
				)}
				{header}
			</div>
			<p className={styles["rp-property-spec__content"]}>{children}</p>
		</div>
	);
};

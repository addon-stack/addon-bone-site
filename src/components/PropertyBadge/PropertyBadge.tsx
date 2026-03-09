import cn from "classnames";
import type {ComponentProps} from "react";

import styles from "./property-badge.scss";

export type PropertyBadgeType = "tip" | "info" | "warning" | "danger";

export interface PropertyBadgeProps extends ComponentProps<"span"> {
	type?: PropertyBadgeType;
	text?: string;
	outline?: boolean;
}

export default ({
	children,
	type = "tip",
	text,
	outline = false,
	className,
	...rest
}: PropertyBadgeProps) => {
	const content = children || text;

	return (
		<span
			{...rest}
			className={cn(
				"rp-badge",
				`rp-badge--${type}`,
				outline && "rp-badge--outline",
				styles["rp-property-badge"],
				className,
			)}
		>
			{content}
		</span>
	);
};

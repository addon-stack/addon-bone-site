import type {ReactNode} from "react";
import {IconArrowRight, SvgWrapper} from "@rspress/core/theme";

import styles from "./details.scss";

interface DetailsProps {
	title: string;
	defaultOpen?: boolean;
	children: ReactNode;
}

export default function Details({
	title,
	defaultOpen = false,
	children,
}: DetailsProps) {
	return (
		<details className={styles["rp-doc-details"]} open={defaultOpen}>
			<summary className={styles["rp-doc-details__summary"]}>
				<SvgWrapper
					className={styles["rp-doc-details__icon"]}
					icon={IconArrowRight}
					aria-hidden
				/>
				<span>{title}</span>
			</summary>
			<div className={styles["rp-doc-details__content"]}>{children}</div>
		</details>
	);
}

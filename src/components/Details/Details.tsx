import {IconArrowRight, SvgWrapper} from "@rspress/core/theme";
import type {ReactNode} from "react";

import styles from "./details.scss";

interface DetailsProps {
	title: string;
	defaultOpen?: boolean;
	children: ReactNode;
}

export default ({title, defaultOpen = false, children}: DetailsProps) => {
	return (
		<details className={styles["rp-details"]} open={defaultOpen}>
			<summary className={styles["rp-details__summary"]}>
				<SvgWrapper
					className={styles["rp-details__icon"]}
					icon={IconArrowRight}
					aria-hidden
				/>
				<span>{title}</span>
			</summary>
			<div className={styles["rp-details__content"]}>{children}</div>
		</details>
	);
};

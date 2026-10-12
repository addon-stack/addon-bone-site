import React, {useState} from "react";

import styles from "./counter.scss";

export default () => {
	const [count, setCount] = useState(0);

	return (
		<button
			type="button"
			className={styles.counter}
			onClick={() => setCount((value) => value + 1)}
		>
			Count: {count}
		</button>
	);
};
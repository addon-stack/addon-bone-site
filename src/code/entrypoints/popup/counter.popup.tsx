import React, {useState} from "react";

import {definePopup} from "adnbn";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<button
			type="button"
			onClick={() => {
				setCount((value) => value + 1);
			}}
		>
			Count: {count}
		</button>
	);
};

export default definePopup({
	title: "Counter",
	container: {
		tagName: "main",
		className: "counter",
	},
	render: Counter,
});
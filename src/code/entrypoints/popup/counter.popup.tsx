import {definePopup} from "adnbn";

import React, {useState} from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<button
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
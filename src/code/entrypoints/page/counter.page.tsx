import {definePage} from "adnbn";

import React, {useState} from "react";

export default definePage({
	title: "Counter",
	container: {tagName: "main", className: "counter"},
	render() {
		const [count, setCount] = useState(0);

		return (
			<button onClick={() => setCount((value) => value + 1)}>
				Count: {count}
			</button>
		);
	},
});
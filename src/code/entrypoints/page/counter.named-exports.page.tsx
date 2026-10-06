import React, {useState} from "react";

export const title = "Counter";
export const container = {tagName: "main", className: "counter"};

export default () => {
	const [count, setCount] = useState(0);

	return (
		<button onClick={() => setCount((value) => value + 1)}>
			Count: {count}
		</button>
	);
};
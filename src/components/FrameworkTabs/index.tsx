import {type Tab, Tabs} from "@rspress/core/theme";
import {Children, type ComponentProps, isValidElement} from "react";

type Framework = "Vanilla" | "React";

function getFrameworkTabLabel(framework: Framework) {
	// Rspress stringifies tab labels when generating Markdown.
	if (process.env.__SSR_MD__) {
		return framework;
	}

	return (
		<span style={{display: "flex", alignItems: "center", gap: 6, fontSize: 15}}>
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				fill="none"
				stroke={framework === "React" ? "#149eca" : "none"}
				strokeWidth="1.5"
				aria-hidden="true"
				focusable="false"
			>
				{framework === "React" ? (
					<>
						<circle cx="12" cy="12" r="1.6" fill="#149eca" stroke="none" />
						<ellipse cx="12" cy="12" rx="11" ry="4.2" />
						<ellipse
							cx="12"
							cy="12"
							rx="11"
							ry="4.2"
							transform="rotate(60 12 12)"
						/>
						<ellipse
							cx="12"
							cy="12"
							rx="11"
							ry="4.2"
							transform="rotate(120 12 12)"
						/>
					</>
				) : (
					<>
						<rect width="24" height="24" rx="1" fill="#3178c6" />
						<text
							x="22"
							y="21"
							textAnchor="end"
							fontFamily="Arial, Helvetica, sans-serif"
							fontSize="13"
							fontWeight="700"
							fill="white"
						>
							TS
						</text>
					</>
				)}
			</svg>
			<span style={{marginTop: 1, marginBottom: 1}}>{framework}</span>
		</span>
	);
}

export default function FrameworkTabs({
	children,
	...props
}: Omit<ComponentProps<typeof Tabs>, "values">) {
	const values = Children.toArray(children)
		.filter((child) => isValidElement<ComponentProps<typeof Tab>>(child))
		.map(({props: {label}}) =>
			typeof label === "string" && (label === "Vanilla" || label === "React")
				? getFrameworkTabLabel(label)
				: label,
		);

	return (
		<Tabs {...props} values={values}>
			{children}
		</Tabs>
	);
}

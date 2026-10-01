interface TransportCallingIntroProps {
	getter: string;
	contexts: string;
}

interface TransportCallingAsyncProps {
	entrypoint: string;
	contexts: string;
}

export const TransportCallingIntro = ({
	getter,
	contexts,
}: TransportCallingIntroProps) => {
	return (
		<p>
			Use <code>{getter}</code> from <code>adnbn</code> in {contexts}.
		</p>
	);
};

export const TransportCallingAsyncBoundary = ({
	entrypoint,
	contexts,
}: TransportCallingAsyncProps) => {
	return (
		<p>
			{entrypoint} proxy calls are always async because they cross an extension
			messaging boundary. Even when the real method is synchronous, call it with{" "}
			<code>await</code> from {contexts}.
		</p>
	);
};

export const TransportCallingNestedMembers = () => {
	return <p>Nested members are also proxied:</p>;
};

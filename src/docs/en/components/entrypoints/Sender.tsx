interface SenderProps {
	entrypoint: string;
}

export const SenderOverview = ({entrypoint}: SenderProps) => {
	return (
		<>
			<p>
				Every {entrypoint} method call has a request-scoped <code>$sender</code>
				. It contains the <code>chrome.runtime.MessageSender</code> for the
				current proxy call and is available inside {entrypoint} methods through{" "}
				<code>this.$sender</code>.
			</p>
		</>
	);
};

export const SenderNotes = ({entrypoint}: SenderProps) => {
	return (
		<>
			<p>
				<code>$sender</code> is not passed as a method argument and is not
				stored on the real {entrypoint} instance. Addon Bone exposes it only for
				the current call, so parallel {entrypoint} calls keep separate sender
				values.
			</p>
			<p>
				Class-based transport targets can implement{" "}
				<code>MessageSenderAware</code> and declare a readonly{" "}
				<code>$sender?: MessageSender</code> field for TypeScript. The{" "}
				<code>declare</code> field is type-only; it does not create stored
				runtime state on the real instance.
			</p>
			<p>
				<code>sender.tab.id</code> is expected for tab-backed calls, such as
				calls from a content script. For popup, sidebar, options, and other
				extension pages, the sender usually identifies the extension page
				through <code>sender.url</code> or <code>sender.origin</code>, and{" "}
				<code>sender.tab</code> may be missing.
			</p>
		</>
	);
};

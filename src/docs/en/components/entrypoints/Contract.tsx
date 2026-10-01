interface ContractOverviewProps {
	entrypoint: string;
	getter: string;
	example: string;
}

export const ContractOverview = ({
	entrypoint,
	getter,
	example,
}: ContractOverviewProps) => {
	return (
		<>
			<p>
				Addon Bone reads the {entrypoint} target at build time and turns its
				public shape into a generated contract, emitted as TypeScript
				declarations. That contract is what gives{" "}
				<code>
					{getter}(&quot;{example}&quot;)
				</code>{" "}
				autocomplete, method arguments, and typed async return values.
			</p>
			<p>
				Recognized shapes include object literals, class instances, and nested
				objects. Within those targets, Addon Bone reads public methods,
				inherited public methods, properties, method parameters, and return
				types. Private, protected, static, and underscore-prefixed members are
				not part of the generated contract.
			</p>
			<p>
				The <code>this</code> parameter is also removed from the generated
				contract, which keeps helper types like <code>MessageSenderAware</code>{" "}
				out of the consumer API.
			</p>
		</>
	);
};

export const ContractMembers = () => {
	return (
		<>
			<p>
				The underscore prefix is a name-based convention: an underscore-prefixed
				member remains a normal runtime member on the real object, but generated
				transport typings omit it. Use it only from code that holds the concrete
				instance, not as part of the proxy API.
			</p>
			<p>
				Use <code>private</code> when nothing outside the class should call a
				helper.
			</p>
		</>
	);
};

export const ContractHints = () => {
	return (
		<>
			<p>
				Prefer normal TypeScript annotations for transport methods and returned
				objects. Use JSDoc contract hints when the generated contract is hard to
				infer statically, comes from an external package, or should be more
				precise than an implementation detail.
			</p>
			<p>
				Supported hints include <code>@type</code> for properties,{" "}
				<code>@param</code> and <code>@returns</code> for methods,{" "}
				<code>@template</code> for generic methods, and <code>@typedef</code>{" "}
				with <code>@property</code> for inline object contracts. When both
				TypeScript and a JSDoc hint describe the same member, the generated
				contract uses the JSDoc hint.
			</p>
			<p>
				<strong>Warning:</strong> JSDoc hints describe the public generated
				contract. Keep them aligned with real runtime values; they are not a
				replacement for validating data that crosses the transport boundary.
			</p>
		</>
	);
};

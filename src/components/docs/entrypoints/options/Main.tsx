import EntrypointSpec, {type EntrypointSpecProps} from "../EntrypointSpec";

export type MainProps = Partial<EntrypointSpecProps>;

export default (props: MainProps) => {
	const {
		name = "main",
		type = "(options) => void | Promise<void>",
		...rest
	} = props;

	return <EntrypointSpec name={name} type={type} {...rest} />;
};

import cn from "classnames";
import type {ComponentPropsWithoutRef} from "react";

type BaseDocHeadingProps = {
	toc?: boolean;
};

type H1DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h1"> & {
		level?: 1;
	};

type H2DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h2"> & {
		level: 2;
	};

type H3DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h3"> & {
		level: 3;
	};

type H4DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h4"> & {
		level: 4;
	};

type H5DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h5"> & {
		level: 5;
	};

type H6DocHeadingProps = BaseDocHeadingProps &
	ComponentPropsWithoutRef<"h6"> & {
		level: 6;
	};

export type DocHeadingProps =
	| H1DocHeadingProps
	| H2DocHeadingProps
	| H3DocHeadingProps
	| H4DocHeadingProps
	| H5DocHeadingProps
	| H6DocHeadingProps;

export default (props: DocHeadingProps) => {
	const {level = 1, toc = true, id, className, children, ...rest} = props;

	const Tag = `h${level}` as const;

	return (
		<Tag id={id} className={cn(className, {"rp-toc-include": toc})} {...rest}>
			{id && (
				<>
					{/* biome-ignore lint/a11y/useAnchorContent: decorative anchor hidden from assistive technologies */}
					<a className="rp-header-anchor" href={`#${id}`} aria-hidden>
						#
					</a>
				</>
			)}
			{children}
		</Tag>
	);
};

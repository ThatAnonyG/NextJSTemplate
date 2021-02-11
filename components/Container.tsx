import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
	className?: string;
	id?: string;
};

function Container({ children, className, id }: Props): JSX.Element {
	return (
		<>
			<div className={`container ${className}`} id={id}>
				{children}
			</div>
		</>
	);
}

export default Container;

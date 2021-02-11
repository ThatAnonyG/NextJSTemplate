import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className: string;
	href: string;
};

function RouterLink({ children, className, href }: Props): JSX.Element {
	const router = useRouter();
	return (
		<a
			className={className}
			href={href}
			style={{
				textDecoration: "none",
			}}
			onClick={(e) => {
				e.preventDefault();
				router.push(href);
			}}
		>
			{children}
		</a>
	);
}

export default RouterLink;

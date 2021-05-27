import { ReactNode } from "react";
import Meta from "@/components/Meta";

type Props = {
	children: ReactNode;
};

function Layout({ children }: Props): JSX.Element {
	return (
		<>
			<Meta></Meta>
			<main>{children}</main>
		</>
	);
}

export default Layout;

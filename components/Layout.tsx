import { ReactNode } from "react";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";

type Props = {
	children: ReactNode;
};

function Layout({ children }: Props): JSX.Element {
	return (
		<>
			<Meta></Meta>
			<Navbar></Navbar>
			<main>{children}</main>
		</>
	);
}

export default Layout;

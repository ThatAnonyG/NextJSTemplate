import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Head from "next/head";

function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>My New Website</title>
			</Head>
			<Layout>
				<Container></Container>
			</Layout>
		</>
	);
}

export default Home;

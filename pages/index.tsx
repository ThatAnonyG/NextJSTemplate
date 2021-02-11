import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Head from "next/head";
import style from "@/styles/Home.module.css";

function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>The Merakism Project</title>
			</Head>
			<Layout>
				<Container id={style.wrapper1}>
					<div className={style.backdrop}></div>
					<div className={style.contentWrapper}>
						<img
							src="https://imgur.com/3YDv5xL.png"
							alt="Logo"
							className={style.logo}
						/>
						<h1 className={style.title}>The Merakism Project</h1>
						<h2 className={style.tagline}>Shaping your life with elegance</h2>
						<span
							className={`${style.downIcon} material-icons`}
							onClick={() => {
								document.getElementById("home_wrapper2").scrollIntoView();
							}}
						>
							expand_more
						</span>
					</div>
				</Container>
				<Container id="home_wrapper2"></Container>
			</Layout>
		</>
	);
}

export default Home;

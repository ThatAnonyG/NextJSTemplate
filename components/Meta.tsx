import Head from "next/head";

function Meta(): JSX.Element {
	return (
		<Head>
			<meta name="title" content="The Merakism Project" />
			<meta name="description" content="" />
			<link rel="icon" type="image/png" href="" />
			<meta name="theme-color" content="#7986ad" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://themerakismproject.com/" />
			<meta property="og:title" content="The Merakism Project" />
			<meta property="og:description" content="" />
			<meta property="og:image" content="https://imgur.com/C1u2Fdl.png" />

			{/* Imports */}
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto&family=Noto+Sans+JP&family=Shadows+Into+Light&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			/>
		</Head>
	);
}

export default Meta;

// #08304a #ddcff2 #846ca0 #7986ad

import Head from "next/head";

/**************** NOTE *********************
 * Find and replace the word TO_REPLACE with your own values
 *******************************************/

function Meta(): JSX.Element {
	return (
		<Head>
			<meta name="title" content="TO_REPLACE" />
			<meta name="description" content="TO_REPLACE" />
			<link rel="icon" type="image/png" href="TO_REPLACE" />
			<meta name="theme-color" content="TO_REPLACE" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="TO_REPLACE" />
			<meta property="og:title" content="TO_REPLACE" />
			<meta property="og:description" content="TO_REPLACE" />
			<meta property="og:image" content="TO_REPLACE" />

			{/* Imports */}
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
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

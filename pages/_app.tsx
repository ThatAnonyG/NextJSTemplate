import App from "next/app";
import "@/styles/globals.css";

class WebApp extends App {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default WebApp;

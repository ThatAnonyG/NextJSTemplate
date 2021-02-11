import App from "next/app";
import "@/styles/globals.css";

class WebApp extends App {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}

	componentDidMount(): void {
		const useTheme = localStorage.getItem("user_theme") || "lightTheme";
		document.body.classList.toggle(useTheme);
	}
}

export default WebApp;

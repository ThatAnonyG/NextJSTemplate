import Container from "@/components/Container";
import style from "@/styles/Navbar.module.css";
import RouterLink from "./RouterLink";

function Navbar(): JSX.Element {
	return (
		<Container id="navbar">
			<h1 className={style.title}>Merakism Project</h1>
			<span className="spacer"></span>
			<RouterLink className={style.navBtn} href="/about">
				ABOUT
			</RouterLink>
			<div className={style.navBtn}>PRICING</div>
			<div className={style.navBtn}>VIDEOS</div>
			<div className={style.navBtn}>CONTACT</div>
			<div className="spacer"></div>
			<span className={`${style.themeIcon} material-icons`}>nightlight</span>
			<label className={style.switch}>
				<input
					className={style.input}
					type="checkbox"
					onClick={() => {
						const currTheme = localStorage.getItem("user_theme") as
							| "lightTheme"
							| "darkTheme";
						const newTheme =
							currTheme === "darkTheme" ? "lightTheme" : "darkTheme";

						localStorage.setItem("user_theme", newTheme);
						document.body.classList.remove(currTheme);
						document.body.classList.add(newTheme);
					}}
				/>
				<span className={style.slider}></span>
			</label>
			<span className={`${style.themeIcon} material-icons`}>light_mode</span>
			<div className="spacer"></div>
			<div className={`${style.navBtn} ${style.loginBtn}`}>LOGIN</div>
			<div className={`${style.navBtn} ${style.registerBtn}`}>SIGN UP</div>
		</Container>
	);
}

export default Navbar;

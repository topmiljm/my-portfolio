import "./Navbar.css";

function Navbar() {
	return (
		<header className="navbar">
			<div className="container navbar__container">
				<a href="#home" className="navbar__logo">
					James Topmiller
				</a>

				<nav aria-label="Primary Navigation">
					<ul className="navbar__links">
						<li>
							<a href="#home">Home</a>
						</li>

						<li>
							<a href="#about">About</a>
						</li>

						<li>
							<a href="#projects">Projects</a>
						</li>

						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
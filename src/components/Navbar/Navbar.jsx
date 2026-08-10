import { useState, useEffect } from "react";
import "./Navbar.css";
// import site from "../../data/site";

function Navbar() {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 400;
			const bottomOfPage =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 10;

			if (bottomOfPage) {
				setActiveSection("contact");
				return;
			}

			let currentSection = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;

				if (
					scrollPosition >= sectionTop &&
					scrollPosition < sectionBottom
				) {
					currentSection = section.id;
				}
			});

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="navbar">
			<div className="container navbar__container">
				<a href="#top" className="navbar__logo">
					James<br></br>Topmiller
				</a>

				<nav aria-label="Primary Navigation">
					<ul className="navbar__links">
						<li>
							<a
								href="#about"
								className={activeSection === "about" ? "active" : ""}
							>
								About
							</a>
						</li>

						{/* <li>
							<a href="#skills">Skills</a>
						</li> */}

						<li>
							<a
								href="#projects"
								className={activeSection === "projects" ? "active" : ""}
							>
								Projects
							</a>
						</li>

						<li>
							<a
								href="#contact"
								className={activeSection === "contact" ? "active" : ""}
							>
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
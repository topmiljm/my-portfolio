import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__container">
        <p className="hero__intro">⟩ Hello, world 
          <div className="hero__intro-div"></div>
        </p>
        <p className="hero__intro-2">My name is</p>

        <h1 className="hero__title">
          James Topmiller
        </h1>

        <p className="hero__location">
          •los angeles, california•
        </p>

        <h2 className="hero__subtitle">
          Full-Stack Software Developer
        </h2>

        <p className="hero__description">
          I build modern, responsive web applications using
          React, Node.js, JavaScript, and SQL.
        </p>

        <div className="container hero__buttons">

          <a href="#projects" className="hero__button">
            View Projects
          </a>

          <a
            href="https://github.com/topmiljm"
            target="_blank"
            rel="noreferrer"
            className="hero__button"
          >
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
      >
        ↓
      </a>
    </section >
  );
}

export default Hero;
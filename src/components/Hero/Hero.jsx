import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__container">
        <p className="hero__intro">Hi, I'm</p>

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

        <a href="#projects" className="hero__button">
          View Projects
        </a>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to About section"
      >
        ↓
      </a>
    </section>
  );
}

export default Hero;
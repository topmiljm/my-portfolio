import "./About.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <ScrollReveal>
          <div className="about__content">
            <div className="about__label">
              <p className="about__eyebrow">About</p>
            </div>

            <div className="about__main">
              <h2 className="about__title">
                I build software with an engineering mindset.
              </h2>

              <div className="about__text">
                <p>
                  I'm a software developer with an engineering background and
                  a strong interest in building practical, user-focused web
                  applications.
                </p>

                <p>
                  I've built and deployed full-stack applications using
                  technologies including React, JavaScript, Node.js, Express,
                  Python, Flask, PostgreSQL, and SQLite. My projects have included
                  e-commerce, music applications, data-driven applications,
                  APIs, authentication, payment processing, and responsive
                  interfaces.
                </p>

                <p>
                  I'm currently looking for opportunities to bring my
                  problem-solving background into a professional software
                  development environment while continuing to grow as a
                  developer.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
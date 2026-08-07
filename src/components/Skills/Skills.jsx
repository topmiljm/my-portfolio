import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="skills__header">
          <p className="skills__eyebrow">Skills</p>

          <h2 className="skills__title">
            Technologies I use to build applications.
          </h2>
        </div>

        <div className="skills__grid">
          <div className="skills__category">
            <h3>Frontend</h3>

            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Router</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>

          <div className="skills__category">
            <h3>Backend</h3>

            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Flask</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="skills__category">
            <h3>Databases</h3>

            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skills__category">
            <h3>Tools & Services</h3>

            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>Stripe</li>
              <li>Cloudinary</li>
              <li>Resend</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
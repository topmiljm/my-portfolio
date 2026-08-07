import "./About.css";

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__header">
                    <p className="about__eyebrow">About Me</p>

                    <h2 className="about__title">
                        Building software with an analytical mindset.
                    </h2>
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <p>
                            I'm a full-stack software developer with an engineering
                            background and a passion for building modern web applications.
                        </p>

                        <p>
                            I enjoy taking an idea from concept to a working application,
                            from designing the user interface to building APIs, working
                            with databases, and deploying the finished product.
                        </p>

                        <p>
                            My background in engineering taught me to approach problems
                            analytically and break complex problems into manageable pieces.
                            I bring that same mindset to software development, where I enjoy
                            turning ideas into functional, user-friendly applications.
                        </p>

                        <p>
                            My projects have given me experience with technologies including
                            React, JavaScript, Node.js, Express, Python, PostgreSQL, and
                            REST APIs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
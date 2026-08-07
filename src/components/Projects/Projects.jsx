import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects__header">
          <p className="projects__eyebrow">Projects</p>

          <h2 className="projects__title">
            Things I've built.
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__content">
                <h3 className="project-card__title">
                  {project.title}
                </h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <ul className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="project-card__links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
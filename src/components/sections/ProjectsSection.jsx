import { featuredProjects } from "../../data/portfolioData";

function ProjectsSection() {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="section projects" id="projets">
      <div className="section-heading">
        <p className="section-kicker">Projets</p>
        <h2>Quelques projets representatifs de mon parcours et de ma progression.</h2>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => {
          const projectImage = project.image ? `${assetBase}${project.image}` : null;

          const content = (
            <article className="project-card" key={project.title}>
              {projectImage ? (
                <div
                  className="project-media"
                  style={{ backgroundImage: `url(${projectImage})` }}
                  aria-hidden="true"
                />
              ) : null}
              <div className="project-copy">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-impact">{project.impact}</div>
              </div>
            </article>
          );

          if (!project.url) {
            return content;
          }

          return (
            <a
              className="project-link"
              href={project.url}
              key={project.title}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ouvrir le projet ${project.title}`}
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;

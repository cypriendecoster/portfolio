import { featuredProjects } from "../../data/portfolioData";

function ProjectsSection() {
  return (
    <section className="section projects" id="projets">
      <div className="section-heading">
        <p className="section-kicker">Projets</p>
        <h2>Quelques projets representatifs de mon parcours et de ma progression.</h2>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="project-impact">{project.impact}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

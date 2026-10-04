import { personalProjects } from "../data/personalProjects";
import LiquidLogicProject from "./LiquidLogicProject";

function PersonalProjects() {
  return (
    <section className="personal-projects" id="personal-projects" aria-labelledby="personal-projects-title">
      <div className="section-header">
        <span className="section-label">03</span>
        <div>
          <h2 id="personal-projects-title">Highlighted Projects</h2>
          <p>Personal projects exploring systems, algorithms, and interactive software.</p>
        </div>
      </div>
      <div className="project-grid">
        <LiquidLogicProject />
        {personalProjects.map(project => (
          <article className="project-card featured-project" key={project.name}>
            <div>
              <span className="project-number">Personal project</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a className="text-link project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository on GitHub`}>
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="technologies">
              {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PersonalProjects;

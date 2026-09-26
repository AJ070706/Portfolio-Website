import { scrollToSection } from "../scrollToSection";
import { courses } from "../data/courses";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-label">04</span>
        <div>
          <h2>Coursework & Projects</h2>
          <p>Coursework at the University of Michigan. A closer look at the systems, algorithms, and tools I’ve built or am developing.</p>
        </div>
      </div>

      <nav className="course-nav" aria-label="Jump to a course">
        {courses.map((course) => (
          <button type="button" key={course.code} onClick={() => scrollToSection(course.code.replaceAll(" ", "-"))}>
            {course.code}
          </button>
        ))}
      </nav>
      {courses.map((course) => (
        <div className="course" key={course.code} id={course.code.replaceAll(" ", "-")}>
          <div className="course-header">
            <span className="course-code">{course.code}</span>
            <h3>{course.name}</h3>
            <div className="course-meta">
              <span className="course-term" aria-label={course.termLabel} title={course.termLabel}>{course.term}</span>
              {course.inProgress && <span className="status-badge">In progress</span>}
            </div>
          </div>

          {course.note && <p className="course-note">{course.note} {course.syllabusUrl && <a className="text-link" href={course.syllabusUrl} target="_blank" rel="noreferrer">Course syllabus ↗</a>}</p>}
          <div className="project-grid">
            {course.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div>
                  <div className="project-meta">
                    <span className="project-number">{project.kind}</span>
                    <span className={`project-status ${project.status === "In progress" ? "is-progress" : "is-complete"}`}>{project.status}</span>
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  {project.url && <a className="text-link project-link" href={project.url} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>}
                </div>

                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
      <section className="planned-courses" aria-labelledby="planned-courses-title">
        <p className="eyebrow">FUTURE COURSEWORK · NOT CURRENTLY ENROLLED</p>
        <h3 id="planned-courses-title">Planned courses</h3>
        <p>These are courses I plan to take in the future. I am not currently taking them, and they do not represent completed coursework.</p>
        <ul>
          <li><span className="course-code">EECS 373</span> Embedded Systems</li>
          <li><span className="course-code">EECS 470</span> Computer Architecture</li>
          <li><span className="course-code">EECS 472</span> Computer Architecture Project</li>
          <li><span className="course-code">EECS 473</span> Advanced Embedded Systems</li>
          <li><span className="course-code">EECS 483</span> Compiler Construction</li>
        </ul>
      </section>
    </section>
  );
}

export default Projects;



const technologies = ["React", "JavaScript", "HTML / CSS", "Firebase", "React Native", "3D Maps"];

function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="section-header">
        <span className="section-label">02</span>
        <div>
          <h2 id="experience-title">Experience</h2>
          <p>From community platforms to embedded interfaces for an exoskeleton.</p>
        </div>
      </div>

      <article className="experience-card">
        <div className="experience-company">
          <div>
            <p className="eyebrow">COMMUNITY & TECHNOLOGY</p>
            <h3>Hey, Blue! <span>— Verdi EcoSchool</span></h3>
          </div>
          <span className="experience-location">Remote</span>
        </div>
        <p className="experience-context">
          Hey, Blue! is a nonprofit connecting community members, police officers,
          businesses, and charities through positive interactions. Its platform
          helps people discover local connections and turn participation into
          rewards and support for community causes.
        </p>
        <a className="text-link" href="https://heyblue.us/" target="_blank" rel="noreferrer">
          Visit Hey, Blue! <span aria-hidden="true">↗</span>
        </a>

        <div className="experience-role">
          <div className="role-heading">
            <h4>Web Development Team Lead</h4>
            <p><time dateTime="2023-06">June 2023</time> – <time dateTime="2024-06">June 2024</time></p>
          </div>
          <ul>
            <li>Joined the founding software team as a mobile developer, became the sole web developer, and grew the web team to 10 members. Led task delegation, code reviews, development practices, and technical direction.</li>
            <li>Built the web platform from the ground up with React, JavaScript, HTML/CSS, and Firebase, creating public pages and role-specific portals for users, officers, businesses, charities, and staff.</li>
            <li>Built and maintained Firebase Hosting, Authentication, Cloud Storage, and Cloud Functions infrastructure, alongside repository practices and deployment workflows.</li>
            <li>Developed administrative tools for user management, promotions, bug monitoring, and feature testing as the platform became Hey, Blue!’s primary public-facing website.</li>
          </ul>
        </div>

        <div className="experience-role">
          <div className="role-heading">
            <h4>3D Development Software Engineer</h4>
            <p><time dateTime="2024-09">Sept. 2024</time> – <time dateTime="2025-01">Jan. 2025</time></p>
          </div>
          <ul>
            <li>Developed interactive 3D maps for the React Native mobile app, rendering community, interaction, and charity locations with dynamically updating positions.</li>
          </ul>
        </div>

        <p className="experience-collaboration">Collaborated with designers, developers, leadership, and law enforcement officers to build accessible features supporting positive police-community interactions.</p>
        <div className="technologies">
          {technologies.map(technology => <span key={technology}>{technology}</span>)}
        </div>
      </article>
      <article className="experience-card">
        <div className="experience-company">
          <div>
            <p className="eyebrow">EMBEDDED SYSTEMS & HARDWARE</p>
            <h3>MSTARX <span>— University of Michigan</span></h3>
          </div>
          <span className="experience-location">Ann Arbor, MI</span>
        </div>
        <p className="experience-context">Developing the ACE exoskeleton’s arm monitor, connecting embedded hardware, device communication, and the pilot’s display and controls.</p>
        <div className="experience-role">
          <div className="role-heading">
            <h4>ACE — Exoskeleton Arm Monitor Developer</h4>
            <p><time dateTime="2025-09">Sept. 2025</time> – Sept. 2026</p>
          </div>
          <ul>
            <li>Developed a UART interface between a Raspberry Pi and Pico to enable communication between the arm monitor and the exoskeleton.</li>
            <li>Implemented a display driver in MicroPython to present exoskeleton statistics and information to the pilot for monitoring and control.</li>
            <li>Designed and built an embedded system from the PCB up, allowing the pilot to change the exoskeleton’s active algorithm and select which information appears on the display.</li>
          </ul>
        </div>
        <div className="technologies">
          {["Raspberry Pi", "Pico", "UART", "MicroPython", "PCB", "Embedded Systems"].map(technology => <span key={technology}>{technology}</span>)}
        </div>
      </article>
    </section>
  );
}

export default Experience;

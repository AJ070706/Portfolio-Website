const highlights = [
  ["Education", "BSE in Computer Science · University of Michigan", "Graduating December 2027"],
  ["Hardware & software", "MSTARX · ACE exoskeleton arm monitor", "Raspberry Pi / Pico · UART · MicroPython"],
  ["Team leadership", "Hey, Blue! · Web Development Team Lead", "Grew and led a 10-member web team"],
  ["Teaching", "Co-founded my high school Coding Club", "Mentored 50+ students in programming"],
  ["Beyond engineering", "Michigan Esports · Rocket League", "Director, varsity captain, and player"],
];

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="section-header">
        <span className="section-label">01</span>
        <div>
          <h2 id="about-title">About</h2>
          <p>Building the software that connects people and hardware.</p>
        </div>
      </div>
      <div className="about-layout">
        <div className="about-story">
          <p className="about-lead">I’m interested in what happens where software meets hardware: how devices communicate, how systems respond, and how people interact with them.</p>
          <p>I’m pursuing a BSE in Computer Science at the University of Michigan, with an expected graduation in December 2027. My coursework spans computer organization, computer vision, and algorithms, with operating systems, logic circuits, and agentic software engineering in progress this fall.</p>
          <p>At MSTARX, I developed an arm monitor for the ACE exoskeleton. My work connects a Raspberry Pi and Pico over UART, displays exoskeleton information using MicroPython, and brings together PCB-level hardware and software so the pilot can select algorithms and choose what to see. It’s the kind of engineering I want to keep doing: making the pieces work together as a system someone can use.</p>
          <p>Before that, I helped build Hey, Blue!’s software platform, growing from a founding mobile developer into the web team lead. I built its React and Firebase web platform, grew the team to 10 members, and later developed interactive 3D maps for its mobile app. That experience taught me to think about both the technical foundations and the people relying on them.</p>
          <p>I also enjoy helping teams learn and improve. In high school, I co-founded a coding club and mentored more than 50 students. Today, I bring that same collaborative mindset to Michigan Esports as Rocket League director, varsity captain, and player.</p>
        </div>
        <dl className="about-highlights">
          {highlights.map(([label, value, detail]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}<span>{detail}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;

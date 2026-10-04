import { useState } from "react";
import home from "../assets/ll-1.png";
import campaign from "../assets/ll-2.png";
import logic from "../assets/ll-3.png";
import sandbox from "../assets/ll-4.png";
import workshop from "../assets/ll-5.png";

const screenshots = [
  { src: home, label: "Home screen", alt: "LiquidLogic home screen overlooking an island town and aqueducts." },
  { src: campaign, label: "Campaign preview", alt: "Preview of the planned Memory Marsh campaign chapter, with a building platform surrounded by marsh islands." },
  { src: logic, label: "Water logic", alt: "Water channels connecting mechanical gates in the LiquidLogic construction sandbox." },
  { src: sandbox, label: "Sandbox", alt: "A water circuit with display basins built in the island town's courtyard." },
  { src: workshop, label: "Component workshop", alt: "A multi-level hexadecimal display circuit being built in the Logicverse component workshop." },
];

const highlights = [
  { title: "Circuit simulation", description: "A graph-based C# simulation propagates water and gate state in fixed time steps, independently of rendering and frame rate." },
  { title: "Reusable components", description: "Players can save, miniaturize, and nest multi-level circuits, then place copies with independent simulation state." },
  { title: "Construction tools", description: "Grid-based 3D editing combines aqueduct routing, interactive mechanisms, undo/redo, and saved builds that resume their flow state." },
];

function LiquidLogicProject() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];
  const changeScreenshot = direction => {
    setActiveIndex(index => (index + direction + screenshots.length) % screenshots.length);
  };

  return (
    <article className="project-card liquidlogic-project" aria-labelledby="liquidlogic-title">
      <div className="liquidlogic-intro">
        <div>
          <div className="project-meta">
            <span className="project-number">Featured personal project · Desktop game</span>
            <span className="project-status is-progress">In development</span>
          </div>
          <h3 id="liquidlogic-title">Liquid Logic</h3>
          <p className="liquidlogic-tagline">Building computation from flowing water.</p>
        </div>
        <div className="liquidlogic-summary">
          <p>I’m developing a 3D engineering game in Unity where players construct logic circuits from water channels, basins, and mechanical gates. It brings digital logic into a visible, interactive system: route a stream, change an input, and watch the circuit respond.</p>
          <div className="technologies" aria-label="LiquidLogic technologies and concepts">
            {["Unity", "C#", "Graph Simulation", "Digital Logic", "3D Interaction"].map(technology => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </div>

      <div className="liquidlogic-gallery" role="group" aria-label="LiquidLogic screenshot gallery">
        <figure className="liquidlogic-screen" id="liquidlogic-screenshot">
          <img src={activeScreenshot.src} alt={activeScreenshot.alt} width="3440" height="1440" loading="lazy" />
          <figcaption>
            <span aria-live="polite" aria-atomic="true">{String(activeIndex + 1).padStart(2, "0")} / 05 — {activeScreenshot.label}</span>
            <a className="text-link" href={activeScreenshot.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${activeScreenshot.label.toLowerCase()} screenshot`}>View full size <span aria-hidden="true">↗</span></a>
          </figcaption>
        </figure>
        <div className="liquidlogic-thumbnails" aria-label="Choose a screenshot">
          {screenshots.map((screenshot, index) => (
            <button type="button" key={screenshot.label} className="liquidlogic-thumbnail" aria-label={`Show ${screenshot.label.toLowerCase()}`} aria-pressed={index === activeIndex} aria-controls="liquidlogic-screenshot" onClick={() => setActiveIndex(index)}>
              <img src={screenshot.src} alt="" width="3440" height="1440" loading="lazy" />
              <span>{screenshot.label}</span>
            </button>
          ))}
        </div>
        <div className="liquidlogic-gallery-navigation">
          <button type="button" onClick={() => changeScreenshot(-1)} aria-controls="liquidlogic-screenshot"><span aria-hidden="true">←</span> Previous</button>
          <p>Development screenshots</p>
          <button type="button" onClick={() => changeScreenshot(1)} aria-controls="liquidlogic-screenshot">Next <span aria-hidden="true">→</span></button>
        </div>
      </div>

      <div className="liquidlogic-highlights">
        {highlights.map(highlight => (
          <div key={highlight.title}>
            <h4>{highlight.title}</h4>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
      <p className="liquidlogic-progress">The construction sandbox and component workshop are implemented; campaign puzzles are still in development.</p>
    </article>
  );
}

export default LiquidLogicProject;

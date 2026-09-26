import "./App.css";
import { useEffect, useRef } from "react";
import { setupScrollReveal } from "./scrollReveal";
import About from "./components/About";
import Experience from "./components/Experience";
import PersonalProjects from "./components/PersonalProjects";
import Projects from "./components/Projects";
import portrait from "./assets/ajsw1.jpg";
import { scrollToSection } from "./scrollToSection";

const names = ["Avery", "Jackson", "Steele", "Weidner"];

function App() {
  const mainRef = useRef(null);
  useEffect(() => setupScrollReveal(mainRef.current), []);
  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <button className="site-name" onClick={() => scrollToSection("intro")}>Avery Jackson Steele Weidner - ajsw@ajsw.dev</button>
          <nav className="site-nav" aria-label="Main navigation">
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("experience")}>Experience</button>
            <button onClick={() => scrollToSection("personal-projects")}>Projects</button>
            <button onClick={() => scrollToSection("projects")}>Coursework</button>
            <a href="https://www.linkedin.com/in/ajsw/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>
      <main ref={mainRef}>
        <section className="hero" id="intro" tabIndex={-1} aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE ENGINEERING @ UNIVERSITY OF MICHIGAN</p>
            <div className="identity">
              <p className="domain-mark" aria-label="ajsw.dev">
                {names.map((name, index) => <span className={`name-color-${index}`} key={name}>{name[0].toLowerCase()}</span>)}<span className="domain-suffix">.dev</span>
              </p>
              <h1 id="intro-title" aria-label="Avery Jackson Steele Weidner">
                {names.map((name, index) => <span className={`name-color-${index}`} key={name}>{name}</span>)}
              </h1>
            </div>
            <p className="hero-description">Computer science student connecting software and hardware.</p>
          </div>
          <figure className="hero-portrait">
            <img src={portrait} alt="Avery Jackson Steele Weidner" width="1206" height="1290" fetchPriority="high" />
            <figcaption>AJSW</figcaption>
          </figure>
        </section>
        <About />
        <Experience />
        <PersonalProjects />
        <Projects />
      </main>
    </>
  );
}
export default App;


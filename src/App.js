// src/App.js
import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-root">
      <header className="topbar">
        <div className="brand">
          <img src="/images/profile.jpg" alt="Martina Blessy" className="brand-avatar" />
          <div className="brand-text">
            <div className="brand-name">Martina Blessy . J</div>
            <div className="brand-role">BE CSE Student — Aspiring Frontend Engineer</div>
          </div>
        </div>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#internship">Internship</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <Hero />
        <div className="grid-two">
          <div>
            <About />
            <Skills />
            <Education />
            <Internship />
            <Projects />
          </div>

          <aside className="card sidebar">
            <h3 className="section-title">Quick Info</h3>
            <ul className="sidebar-list">
              <li><strong>Email:</strong> matin272430@gmail.com</li>
              <li><strong>Phone:</strong> +91 93450 43486</li>
              <li><strong>Location:</strong> Chennai, India</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/Martinablessy30" target="_blank" rel="noreferrer">Martinablessy30</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/martina-blessy-51b251379" target="_blank" rel="noreferrer">Martina Blessy</a></li>
            </ul>
            <div style={{marginTop:12}}>
              <a className="btn btn-primary" href="/resume.pdf" download>Download Resume</a>
            </div>
          </aside>
        </div>
      </main>

      <footer className="footer">© Martina Blessy . J — BE CSE Student — Chennai</footer>
    </div>
  );
}

export default App;

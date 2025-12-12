// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "StudentID — Figma UI/UX Interface",
    tag: "Figma",
    desc: "Component library, prototypes and design handoff for StudentID project.",
    link: "#"
  },
  {
    title: "Sample Project (Repo)",
    tag: "React",
    desc: "Project demo and code repository.",
    link: "https://github.com/Martinablessy30/sampleproject.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="card section projects-section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">Projects</h2>

      <div style={{marginTop:10}}>
        {projects.map((p, i) => (
          <div key={i} className="project" style={{marginBottom:12}}>
            <div className="dot" aria-hidden>{p.tag}</div>
            <div>
              <strong><a href={p.link} target="_blank" rel="noreferrer" style={{color:"inherit", textDecoration:"none"}}>{p.title}</a></strong>
              <div style={{color:"var(--muted)", fontSize:13, marginTop:6}}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

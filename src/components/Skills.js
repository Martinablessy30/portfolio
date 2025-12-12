import React from "react";
const skills = [
  "UI/UX Design",
  "Figma (Wireframes & Prototypes)",
  "Responsive Design",
  "React.js",
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "Tailwind / Bootstrap",
  "REST API Integration",
  "ChatGPT & AI tools",
  "Prompt engineering basics",
  "Data Structures & Algorithms",
  "OOP",
  "Operating Systems (basics)",
  "SQL / MySQL",
  "Git & GitHub",
  "VS Code",
  "npm / Node.js",
  "AWS (online certificate)"
];

export default function Skills() {
  return (
    <section id="skills" className="card section skills-section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">Skills</h2>
      <p className="section-sub">Key technologies and tools I use.</p>

      <div className="skills-grid" role="list" aria-label="Skills">
        {skills.map((s, i) => (
          <div className="skill-pill" key={i} role="listitem">{s}</div>
        ))}
      </div>
    </section>
  );
}

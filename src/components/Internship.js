// src/components/Internship.js
import React from "react";

const internships = [
  {
    org: "StudentID",
    role: "Figma UI/UX Interface Intern",
    date: "June 2025 – July 2025",
    bullets: [
      "Built reusable Figma components and design tokens.",
      "Created high-fidelity prototypes and user flows.",
      "Prepared handoff-ready assets for developers."
    ]
  },
  {
    org: "DigiOptimized",
    role: "Frontend Developer (React & CSS)",
    date: "December 2025 – January 2026",
    bullets: [
      "Implemented responsive UI components in React.",
      "Improved styling and UX using CSS best practices.",
      "Collaborated with team via GitHub and code reviews."
    ]
  }
];

export default function Internship() {
  return (
    <section id="internship" className="card section internship-section" aria-labelledby="internship-title">
      <h2 id="internship-title" className="section-title">Internships</h2>

      {internships.map((it, idx) => (
        <div key={idx} style={{marginTop:12, marginBottom:6}}>
          <div style={{fontWeight:700}}>{it.role} — <span style={{color:"var(--muted)"}}>{it.org}</span></div>
          <div style={{color:"var(--muted)", fontSize:13}}>{it.date}</div>
          <ul style={{marginTop:8, color:"var(--muted)"}}>
            {it.bullets.map((b,i)=> <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

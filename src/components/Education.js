// src/components/Education.js
import React from "react";

export default function Education() {
  return (
    <section id="education" className="card section education-section" aria-labelledby="education-title">
      <h2 id="education-title" className="section-title">Education</h2>

      <div style={{marginTop:8}}>
        <div style={{marginBottom:8}}>
          <strong>BE Computer Science & Engineering</strong><br />
          Agni College of Technology — Currently pursuing (3rd year)
        </div>

        <div style={{marginBottom:8}}>
          <strong>12th — Avichi Hr Sec School</strong><br />
          Tamil Nadu State Board — 69.5%
        </div>

        <div>
          <strong>10th — Avichi Hr Sec School</strong><br />
          Tamil Nadu State Board
        </div>
      </div>
    </section>
  );
}

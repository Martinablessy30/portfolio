// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="card section contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">Contact</h2>

      <div style={{marginTop:10}}>
        <div className="contact-item"><strong>Email</strong><span>matin272430@gmail.com</span></div>
        <div className="contact-item"><strong>Phone</strong><span>+91 93450 43486</span></div>
        <div className="contact-item"><strong>Location</strong><span>Chennai, India</span></div>

        <div style={{marginTop:12}}>
          <a className="btn btn-primary" href="mailto:matin272430@gmail.com">Email Me</a>
          <a className="btn" href="https://github.com/Martinablessy30" target="_blank" rel="noreferrer" style={{marginLeft:8}}>GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/martina-blessy-51b251379" target="_blank" rel="noreferrer" style={{marginLeft:8}}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

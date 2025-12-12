import React from "react";
export default function Hero() {
  return (
    <section className="card hero" id="home" aria-label="Hero">
      <div className="hero-left">
        <h1>Martina Blessy . J</h1>
        <div className="role">BE Computer Science & Engineering Student — Aspiring Frontend Engineer</div>

        <p className="lead">
          Aspiring web developer with hands-on experience in Figma UI/UX design, React application development,
          and integrating AI-driven ideas using ChatGPT.
        </p>

        <div style={{marginTop:12}}>
          <a className="btn btn-primary" href="#contact">Contact</a>
          <a className="btn btn-ghost" href="/resume.pdf" download style={{marginLeft:10}}>Download Resume</a>
        </div>
      </div>

      <div className="hero-right">
        <img src="/images/profile.jpg" alt="Martina Blessy portrait" className="hero-avatar" />
      </div>
    </section>
  );
}

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hello, I'm</h1>
            <h2 className="hero-name">Your Name</h2>
            <h3 className="hero-title">Software Engineer</h3>
            <p className="hero-description">
              Fresh Computer Science graduate passionate about creating elegant
              solutions to complex problems. Specialized in full-stack
              development with modern technologies.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
                    {`const developer = {
  name: "Your Name",
  role: "Software Engineer",
  skills: ["React", "Node.js", "Python"],
  passion: "Building the future",
  available: true
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "HTML/CSS",
    "Git",
    "SQL",
    "MongoDB",
    "REST APIs",
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a recent Computer Science graduate with a strong passion for
              software development and problem-solving. My journey in tech began
              with curiosity about how things work, and has evolved into a deep
              commitment to creating impactful software solutions.
            </p>
            <p className="about-description">
              During my studies, I've developed a solid foundation in
              algorithms, data structures, and software engineering principles.
              I'm particularly interested in full-stack development and enjoy
              working with modern web technologies to build user-friendly
              applications.
            </p>
            <p className="about-description">
              I'm eager to contribute to innovative projects and continue
              learning in a collaborative environment. My goal is to leverage
              technology to solve real-world problems and make a positive
              impact.
            </p>
          </div>
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-bullet">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

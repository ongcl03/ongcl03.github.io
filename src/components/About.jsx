import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "Python",
    "JavaScript",
    "Java",
    "SpringBoot",
    "React",
    "HTML/CSS",
    "Flutter",
    "Dart",
    "SQL",
    "C",
    "Git",
    "REST APIs",
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am a passionate and detail-oriented Computer Science graduate
              from Monash University, driven to build complete software
              solutions from concept to deployment. My hands-on experience
              includes creating a <strong>backend microservice</strong> using{" "}
              <strong>Java and Spring Boot</strong>, as well as developing
              interactive front-ends for <strong>AI applications</strong>.
              Through my internship, I honed my skills in{" "}
              <strong>database optimization</strong> and{" "}
              <strong>full-stack feature delivery</strong>. I am driven to apply
              my problem-solving abilities and full-stack perspective to create
              meaningful, real-world solutions, fueled by a commitment to
              continuous learning and a deep interest in the field of AI.
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

import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Rebar Counting App",
      description:
        "An AI-powered application to automate rebar counting on construction sites using a custom-trained YOLOv8 model.",
      technologies: ["Python", "PyTorch", "YOLOv8", "Hugging Face", "Gradio"],
      github: "https://github.com/ongcl03/rebar-yolov8-model",
      live: "https://huggingface.co/spaces/cl0504/rebar-yolov8-app",
    },
    {
      id: 2,
      title: "URL Shortener Service",
      description:
        "A production-ready backend microservice for shortening URLs, with versioned DB migrations via Flyway.",
      technologies: ["Java", "Spring Boot", "MySQL", "Flyway", "Swagger"],
      github: "https://github.com/ongcl03/url-shortener",
      live: "https://github.com/ongcl03/url-shortener", // No demo link for backend service
    },
    {
      id: 3,
      title: "AI Tools Directory",
      description:
        "A curated and responsive directory of free AI tools, built with a modern tech stack and deployed on Vercel.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
      github: "https://github.com/ongcl03/Ai-List-Site",
      live: "https://free-aitools.vercel.app/",
    },
    {
      id: 4,
      title: "Music Streaming App",
      description:
        "A full-featured music streaming app built with Flutter, using Firebase for real-time playlist management.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
      github:
        "https://github.com/ongcl03/flutter_projects/tree/reverb_music_stream_app",
      live: "https://github.com/ongcl03/flutter_projects/tree/reverb_music_stream_app", // No demo link
    },
    {
      id: 5,
      title: "Instagram Automation Bot",
      description:
        "A Python-based automation script for Instagram, leveraging Selenium for browser control and interaction.",
      technologies: ["Python", "Selenium", "Web Scraping", "Web Automation"],
      github: "https://github.com/ongcl03/InstaPy",
      live: "https://github.com/ongcl03/InstaPy", // No demo link for a script
    },
    {
      id: 6,
      title: "Google Form Auto Filler",
      description:
        "A Python script that automates filling out Google Forms using Selenium for web browser control and data entry.",
      technologies: ["Python", "Selenium", "Web Scraping", "Web Automation"],
      github: "https://github.com/ongcl03/Google-Form-Auto-Filler",
      live: "https://github.com/ongcl03/Google-Form-Auto-Filler", // No demo link for a script
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

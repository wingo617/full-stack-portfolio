import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import './ProjectsPage.css';

const ProjectsPage = ({ onOpenModal }) => (
  <section className="page page-projects">
    <div className="page-content">
      <div className="page-header">
        <span className="page-number">03</span>
        <h2 className="page-title">Featured Work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onOpenModal(project)}
          >
            <div className="project-number">0{index + 1}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-link">
              View Screenshots <ExternalLink size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsPage;

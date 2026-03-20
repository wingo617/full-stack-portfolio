import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Home, Briefcase, Layers, Code } from 'lucide-react';
import './FullScreenPortfolio.css';

const FullScreenPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const pages = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // SCROLL DISABLED - Navigation only via button clicks
    const handleWheel = (e) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const navigateToPage = (pageIndex) => {
    if (pageIndex === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage(pageIndex);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const projects = [
    {
      title: "DeFi Trading Platform",
      description: "Real-time cryptocurrency trading platform with advanced analytics",
      tech: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "ML-powered content creation tool with natural language processing",
      tech: ["Next.js", "Python", "TensorFlow", "Redis"],
      link: "#"
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Multi-cloud deployment and monitoring dashboard",
      tech: ["React", "AWS", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      title: "Social Analytics Platform",
      description: "Real-time social media analytics with predictive insights",
      tech: ["Vue.js", "FastAPI", "MongoDB", "D3.js"],
      link: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "GraphQL", "REST APIs", "Microservices"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
    { category: "DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"] }
  ];

  return (
    <div className="fullscreen-portfolio">
      {/* Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      />

      {/* Side Navigation */}
      <nav className="side-nav">
        <div className="nav-dots">
          <button
            className={`nav-dot ${currentPage === 0 ? 'active' : ''}`}
            onClick={() => navigateToPage(0)}
            aria-label="Home"
          >
            <Home size={20} />
          </button>
          <button
            className={`nav-dot ${currentPage === 1 ? 'active' : ''}`}
            onClick={() => navigateToPage(1)}
            aria-label="About"
          >
            <User size={20} />
          </button>
          <button
            className={`nav-dot ${currentPage === 2 ? 'active' : ''}`}
            onClick={() => navigateToPage(2)}
            aria-label="Skills"
          >
            <Layers size={20} />
          </button>
          <button
            className={`nav-dot ${currentPage === 3 ? 'active' : ''}`}
            onClick={() => navigateToPage(3)}
            aria-label="Projects"
          >
            <Briefcase size={20} />
          </button>
          <button
            className={`nav-dot ${currentPage === 4 ? 'active' : ''}`}
            onClick={() => navigateToPage(4)}
            aria-label="Contact"
          >
            <Mail size={20} />
          </button>
        </div>
      </nav>

      {/* Pages Container */}
      <div 
        className="pages-container" 
        style={{ transform: `translateX(-${currentPage * 100}vw)` }}
      >
        {/* HOME PAGE */}
        <section className="page page-home">
          <div className="home-content">
            <div className="home-text">
              <div className="home-greeting">Hello, I'm</div>
              <h1 className="home-title">
                <span className="gradient-text">Full Stack</span>
                <br />
                Developer
              </h1>
              <p className="home-description">
                Crafting digital experiences with clean code and innovative solutions.
                Specialized in building scalable web applications from concept to deployment.
              </p>
              <div className="home-cta">
                <button className="btn-primary" onClick={() => navigateToPage(3)}>
                  <span>View Projects</span>
                </button>
                <button className="btn-secondary" onClick={() => navigateToPage(4)}>
                  Contact Me
                </button>
              </div>
            </div>
            <div className="home-visual">
              <div className="floating-card card-1">
                <Code size={32} />
                <span>Code</span>
              </div>
              <div className="floating-card card-2">
                <Briefcase size={32} />
                <span>Build</span>
              </div>
              <div className="floating-card card-3">
                <Code2 size={32} />
                <span>Deploy</span>
              </div>
              <div className="center-orb"></div>
            </div>
          </div>
        </section>

        {/* ABOUT PAGE */}
        <section className="page page-about">
          <div className="page-content">
            <div className="page-header">
              <span className="page-number">01</span>
              <h2 className="page-title">About Me</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p className="about-intro">
                  I'm a full-stack developer passionate about creating elegant, efficient, 
                  and scalable digital solutions.
                </p>
                <p>
                  With years of experience across the entire development stack, I specialize 
                  in transforming complex problems into intuitive, high-performance applications. 
                  My approach combines technical expertise with a deep understanding of user needs.
                </p>
                <p>
                  I thrive in collaborative environments and believe in writing code that's 
                  not just functional, but maintainable, testable, and future-proof. When I'm 
                  not coding, I'm exploring new technologies, contributing to open source, or 
                  sharing knowledge with the developer community.
                </p>
                <div className="about-stats">
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div className="image-placeholder">
                  <User size={120} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS PAGE */}
        <section className="page page-skills">
          <div className="page-content">
            <div className="page-header">
              <span className="page-number">02</span>
              <h2 className="page-title">Tech Stack</h2>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="skill-category-title">{skill.category}</h3>
                  <div className="skill-items">
                    {skill.items.map((item, i) => (
                      <div key={i} className="skill-item">
                        <div className="skill-bar">
                          <div className="skill-bar-fill"></div>
                        </div>
                        <span className="skill-name">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS PAGE */}
        <section className="page page-projects">
          <div className="page-content">
            <div className="page-header">
              <span className="page-number">03</span>
              <h2 className="page-title">Featured Work</h2>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="project-number">0{index + 1}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT PAGE */}
        <section className="page page-contact">
          <div className="page-content">
            <div className="page-header">
              <span className="page-number">04</span>
              <h2 className="page-title">Let's Connect</h2>
            </div>
            <div className="contact-content">
              <p className="contact-text">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <a href="mailto:your.email@example.com" className="contact-email">
                your.email@example.com
              </a>
              <div className="social-links">
                <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={28} />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={28} />
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <Mail size={28} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullScreenPortfolio;

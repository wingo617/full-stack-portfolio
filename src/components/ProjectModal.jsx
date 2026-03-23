import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    setCarouselIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [carouselIndex, project]);

  if (!project) return null;

  const total = project.screenshots.length;
  const prev  = () => setCarouselIndex(i => (i - 1 + total) % total);
  const next  = () => setCarouselIndex(i => (i + 1) % total);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {/* Carousel */}
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {project.screenshots.map((shot, i) => (
              <div key={i} className="carousel-slide" style={{ background: shot.color }}>
                <div className="screenshot-mockup">
                  <div className="mockup-bar">
                    <div className="mockup-dots">
                      <span style={{ background: '#ff5f57' }} />
                      <span style={{ background: '#ffbd2e' }} />
                      <span style={{ background: '#28c840' }} />
                    </div>
                    <div className="mockup-url">
                      {project.title.toLowerCase().replace(/ /g, '-')}
                    </div>
                  </div>

                  <div className="mockup-content" style={{ borderColor: shot.accent + '30' }}>
                      <img src={shot.img} alt={shot.desc}/>
                  </div>
                </div>
                {/* <div className="slide-caption">{shot.desc}</div> */}
              </div>
            ))}
          </div>

          <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button className="carousel-btn carousel-next" onClick={next} aria-label="Next">
            <ChevronRight size={22} />
          </button>

          <div className="carousel-dots">
            {project.screenshots.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === carouselIndex ? 'active' : ''}`}
                onClick={() => setCarouselIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Info footer */}
        <div className="modal-info">
          <div className="modal-info-left">
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-desc">{project.description}</p>
            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
          <a
            href={project.link}
            className="modal-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

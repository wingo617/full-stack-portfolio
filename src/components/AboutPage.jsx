import React from 'react';
import { User } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => (
  <section className="page page-about">
    <div className="page-content">
      <div className="page-header">
        <span className="page-number">01</span>
        <h2 className="page-title">About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p className="about-intro">
            I'm a full-stack developer passionate about creating elegant,
            efficient, and scalable digital solutions.
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
);

export default AboutPage;

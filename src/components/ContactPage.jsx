import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => (
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

        <a href="mailto:solutiondev617@gmail.com" className="contact-email">
          solutiondev617@gmail.com
        </a>

        <div className="social-links">
          <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <Github size={28} /><span>GitHub</span>
          </a>
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={28} /><span>LinkedIn</span>
          </a>
          <a href="mailto:solutiondev617@gmail.com" className="social-link">
            <Mail size={28} /><span>Email</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;

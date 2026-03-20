import React from 'react';
import { skills } from '../data/skills';
import './SkillsPage.css';

const SkillsPage = () => (
  <section className="page page-skills">
    <div className="page-content">
      <div className="page-header">
        <span className="page-number">02</span>
        <h2 className="page-title">Tech Stack</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="skill-category-title">{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-name">{item}</span>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsPage;

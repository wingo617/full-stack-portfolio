import React, { useEffect, useRef } from 'react';
import { Code2, Briefcase, Code } from 'lucide-react';
import './HomePage.css';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Particle config ──────────────────────────────────────
    const COUNT        = 55;
    const MAX_DIST     = 160;
    const NODE_RADIUS  = 3.2;
    const NODE_COLOR   = '#c8a96e';   // golden
    const LINE_COLOR   = '#c8a96e';
    const SPEED        = 0.45;

    const particles = Array.from({ length: COUNT }, () => ({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height,
      vx:  (Math.random() - 0.5) * SPEED,
      vy:  (Math.random() - 0.5) * SPEED,
      r:   NODE_RADIUS * (0.5 + Math.random() * 0.8),
      // pulse animation offset
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = (t) => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // move
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // lines between close pairs
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.55;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = LINE_COLOR;
            ctx.globalAlpha = alpha;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        const pulse = 0.7 + 0.3 * Math.sin(t * 0.002 + p.phase);
        ctx.globalAlpha = pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR;
        ctx.fill();

        // small glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
        ctx.strokeStyle = NODE_COLOR;
        ctx.globalAlpha = pulse * 0.18;
        ctx.lineWidth   = 0.6;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
};

const HomePage = ({ onNavigate }) => (
  <section className="page page-home">
    {/* Full-bleed particle network behind everything */}
    <ParticleNetwork />

    <div className="home-content">
      <div className="home-text">
        <div className="home-greeting">Hello, I'm</div>
        <h1 className="home-title">
          <span className="gradient-text">Full Stack</span>
          <br />Developer
        </h1>
        <p className="home-description">
          Crafting digital experiences with clean code and innovative solutions.
          Specialized in building scalable web applications from concept to deployment.
        </p>
        <div className="home-cta">
          <button className="btn-primary" onClick={() => onNavigate(3)}>
            <span>View Projects</span>
          </button>
          <button className="btn-secondary" onClick={() => onNavigate(4)}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="home-visual">
        <div className="floating-card card-1"><Code size={32} /><span>Code</span></div>
        <div className="floating-card card-2"><Briefcase size={32} /><span>Build</span></div>
        <div className="floating-card card-3"><Code2 size={32} /><span>Deploy</span></div>
        <div className="center-orb" />
      </div>
    </div>
  </section>
);

export default HomePage;

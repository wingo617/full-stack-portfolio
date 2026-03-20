import React, { useState, useEffect, useRef } from 'react';
import './styles/global.css';

import SideNav      from './components/SideNav';
import HomePage     from './components/HomePage';
import AboutPage    from './components/AboutPage';
import SkillsPage   from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage  from './components/ContactPage';
import ProjectModal from './components/ProjectModal';

const FullScreenPortfolio = () => {
  const [currentPage,    setCurrentPage]    = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition,  setMousePosition]  = useState({ x: 0, y: 0 });
  const [isMobile,       setIsMobile]       = useState(false);
  const [modalProject,   setModalProject]   = useState(null);
  const touchStartY = useRef(null);

  const TOTAL_PAGES = 5;

  /* ── detect mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── cursor glow (desktop only) ── */
  useEffect(() => {
    if (isMobile) return;
    const move = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [isMobile]);

  /* ── block scroll on desktop ── */
  useEffect(() => {
    if (isMobile) return;
    const block = (e) => e.preventDefault();
    window.addEventListener('wheel', block, { passive: false });
    return () => window.removeEventListener('wheel', block);
  }, [isMobile]);

  /* ── touch swipe on mobile ── */
  useEffect(() => {
    if (!isMobile) return;
    const onStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd   = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        navigateTo(delta > 0
          ? Math.min(currentPage + 1, TOTAL_PAGES - 1)
          : Math.max(currentPage - 1, 0)
        );
      }
      touchStartY.current = null;
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend',   onEnd);
    };
  }, [isMobile, currentPage]);

  const navigateTo = (index) => {
    if (index === currentPage || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <div className="fullscreen-portfolio">

      {/* Cursor glow — desktop only */}
      {!isMobile && (
        <div
          className="cursor-glow"
          style={{ left: mousePosition.x, top: mousePosition.y }}
        />
      )}

      {/* Project screenshot modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

      {/* Sidebar navigation */}
      <SideNav currentPage={currentPage} onNavigate={navigateTo} />

      {/* Horizontal page slider */}
      <div
        className="pages-container"
        style={{ transform: `translateX(-${currentPage * 100}vw)` }}
      >
        <HomePage     onNavigate={navigateTo} />
        <AboutPage    />
        <SkillsPage   />
        <ProjectsPage onOpenModal={setModalProject} />
        <ContactPage  />
      </div>

    </div>
  );
};

export default FullScreenPortfolio;

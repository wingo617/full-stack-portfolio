import React from 'react';
import { Home, User, Layers, Briefcase, Mail } from 'lucide-react';
import './SideNav.css';

const NAV_ITEMS = [
  { icon: <Home size={18} />,     label: 'Home' },
  { icon: <User size={18} />,     label: 'About' },
  { icon: <Layers size={18} />,   label: 'Skills' },
  { icon: <Briefcase size={18} />,label: 'Projects' },
  { icon: <Mail size={18} />,     label: 'Contact' },
];

const SideNav = ({ currentPage, onNavigate }) => (
  <nav className="side-nav">
    <div className="nav-dots">
      {NAV_ITEMS.map((item, i) => (
        <button
          key={i}
          className={`nav-dot ${currentPage === i ? 'active' : ''}`}
          onClick={() => onNavigate(i)}
          aria-label={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>
  </nav>
);

export default SideNav;

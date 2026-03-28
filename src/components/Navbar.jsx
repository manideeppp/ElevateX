import { useEffect, useRef, useState } from 'react';
import LogoSVG from './icons/LogoSVG';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navCls = ['navbar', scrolled && 'scrolled', mobileOpen && 'open'].filter(Boolean).join(' ');

  return (
    <nav className={navCls} ref={navRef}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-mark"><LogoSVG /></div>
          <span className="logo-text">Elevate<span className="logo-x">X</span></span>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <div className="nav-right">
          <a href="#contact" className="nav-cta magnetic-btn">
            <span>Start a Project</span>
            <div className="btn-glow" />
          </a>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <svg className="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg className="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          </button>
        </div>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      <div className="mobile-menu">
        <ul>
          {['services','work','why-us','testimonials','contact'].map(s => (
            <li key={s}><a href={`#${s}`} onClick={() => setMobileOpen(false)}>{s.replace('-',' ').replace(/\b\w/g,l=>l.toUpperCase())}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

import LogoSVG from './icons/LogoSVG';
import { FadeIn } from './MotionPrimitives';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <FadeIn>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div className="logo-mark"><LogoSVG size={28} /></div>
                <span className="logo-text">Elevate<span className="logo-x">X</span></span>
              </a>
              <p>Strategy-driven design &amp; engineering for brands that refuse to blend in.</p>
            </div>
            <div className="footer-links">
              {links.map((l) => (
                <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} ElevateX. All rights reserved.</span>
            <span>Crafted with Passion for ElevateX</span>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}

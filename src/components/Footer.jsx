import { useState } from 'react';
import Logo from './icons/Logo';
import { FadeIn } from './MotionPrimitives';

const WHATSAPP = 'https://wa.me/919515320303';

const socials = [
  {
    label: 'Email',
    href: 'mailto:elevatex.agency@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const accordionSections = [
  {
    id: 'quick',
    title: 'Quick Links',
    links: [
      { label: 'Process', href: '#process' },
      { label: 'Work', href: '#work' },
      { label: 'Why ElevateX', href: '#why-us' },
      { label: 'Reviews', href: '#testimonials' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    links: [
      { label: 'Website Design', href: '#process' },
      { label: 'Landing Pages', href: '#process' },
      { label: 'E-Commerce', href: '#process' },
      { label: 'Brand Identity', href: '#process' },
      { label: 'UI/UX Design', href: '#process' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Portfolio', href: '#work' },
      { label: 'Client Stories', href: '#testimonials' },
      { label: 'Our Process', href: '#process' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { label: 'elevatex.agency@gmail.com', href: 'mailto:elevatex.agency@gmail.com' },
      { label: '+91 9515320303', href: 'tel:+919515320303' },
      { label: 'WhatsApp Us', href: WHATSAPP, external: true },
      { label: 'Hyderabad, India', href: '#', static: true },
    ],
  },
];

function FooterAccordion({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`footer-acc${open ? ' open' : ''}`}>
      <button
        type="button"
        className="footer-acc-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{section.title}</span>
        <svg className="footer-acc-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>
      <div className="footer-acc-panel">
        <ul>
          {section.links.map((link) => (
            <li key={link.label}>
              {link.static ? (
                <span className="footer-acc-static">{link.label}</span>
              ) : (
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <FadeIn>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-top">
            <a href="#" className="footer-brand-row">
              <Logo variant="mark" size={40} />
              <span className="footer-brand-name">Elevate<span className="logo-x">X</span></span>
            </a>
            <p className="footer-motto">
              <span>Design.</span> <span>Build.</span> <span className="footer-motto-accent">Elevate.</span>
            </p>
            <p className="footer-desc">
              Strategy-driven design and full-stack engineering for brands that refuse to blend in.
              No templates. No shortcuts. Just premium results.
            </p>
          </div>

          <div className="footer-accordions">
            {accordionSections.map((section) => (
              <FooterAccordion key={section.id} section={section} />
            ))}
          </div>

          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social"
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <a href={WHATSAPP} className="footer-banner-cta" target="_blank" rel="noopener noreferrer">
            <span className="footer-banner-line" aria-hidden="true" />
            <span className="footer-banner-text">Let&apos;s Build Something Extraordinary <span className="footer-banner-arrow">→</span></span>
            <span className="footer-banner-line" aria-hidden="true" />
          </a>

          <div className="footer-bottom">
            <p className="footer-copy">&copy; {new Date().getFullYear()} ElevateX. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <span className="footer-legal-sep">|</span>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, HoverLift } from './MotionPrimitives';

const featured = {
  tags: ['E-Commerce', 'Handcrafted Art', 'Custom Design'],
  title: 'Swachithram — Handcrafted Art Store',
  desc: 'We built a complete end-to-end e-commerce website for Swachithram — featuring an admin portal, user authentication, payment gateway integration, and a seamless shopping experience for handcrafted Indian art, custom portraits, doll art, and personalised products.',
  link: 'https://swachitram.vercel.app/',
  image: '/swachithram.png',
  results: [
    { val: '500+', label: 'Happy Customers' },
    { val: '100%', label: 'Handmade' },
    { val: '4.9★', label: 'Avg Rating' },
  ],
};

const projects = [
  {
    tags: ['Landing Page', 'Brand Identity'],
    title: 'Coming Soon',
    desc: 'A new client project is in the works. Stay tuned — we\'re crafting something exciting.',
  },
  {
    tags: ['Portfolio', 'Creative'],
    title: 'Coming Soon',
    desc: 'Another project is underway. We only show work we\'re truly proud of — check back shortly.',
  },
];

function DeviceFrame({ children }) {
  return (
    <div className="pf-device">
      <div className="pf-device-bar">
        <i /><i /><i />
      </div>
      {children}
    </div>
  );
}

function DeviceFrameSm({ children }) {
  return (
    <div className="pf-device-sm">
      <div className="pf-device-bar">
        <i /><i /><i />
      </div>
      {children}
    </div>
  );
}

function Placeholder({ height = 200, label }) {
  return (
    <div
      className="pf-screenshot"
      style={{
        height,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-3)',
        fontSize: 13,
      }}
    >
      <span style={{ opacity: 0.4 }}>{label}</span>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-3" />
        <div className="sbg-orb sbg-orb-4" />
      </div>
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Our Work</span>
          </div>
          <h2 className="section-title">Websites We've Built</h2>
          <p className="section-desc">
            Real projects for real businesses — designed with purpose and built to make an impact.
          </p>
        </FadeIn>

        {/* Featured project — Swachithram */}
        <ScaleIn className="pf-featured">
          <div className="glass-card pf-card">
            <div className="pf-visual" style={{ position: 'relative' }}>
              <DeviceFrame>
                <img
                  src={featured.image}
                  alt="Swachithram — Handcrafted Art Store"
                  className="pf-screenshot"
                  style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }}
                />
              </DeviceFrame>
              <div className="pf-device-glow" />
            </div>
            <div className="pf-info">
              <div className="pf-tags">
                {featured.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.desc}</p>
              <div className="pf-results">
                {featured.results.map((r) => (
                  <div key={r.label} className="pf-result">
                    <span className="pf-result-val">{r.val}</span>
                    <span className="pf-result-lab">{r.label}</span>
                  </div>
                ))}
              </div>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary pf-visit-btn"
              >
                <span>Visit Live Site</span>
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>
        </ScaleIn>

        {/* Grid projects */}
        <StaggerContainer stagger={0.15} className="pf-grid">
          {projects.map((proj) => (
            <StaggerItem key={proj.title + proj.desc}>
              <HoverLift className="glass-card tilt-card" lift={-8}>
                <div className="pf-visual-sm">
                  <DeviceFrameSm>
                    <Placeholder height={180} label={proj.title} />
                  </DeviceFrameSm>
                </div>
                <div className="pf-info-sm">
                  <div className="pf-tags">
                    {proj.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
                <div className="card-glow" />
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

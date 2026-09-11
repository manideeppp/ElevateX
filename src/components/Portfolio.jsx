import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, HoverLift } from './MotionPrimitives';

const featuredProjects = [
  {
    tags: ['E-Commerce', 'Handcrafted Art', 'Custom Design'],
    title: 'Swachithram: Handcrafted Art Store',
    desc: 'We built a complete end-to-end e-commerce website for Swachithram featuring an admin portal, user authentication, payment gateway integration, and a seamless shopping experience for handcrafted Indian art, custom portraits, doll art, and personalised products.',
    link: 'https://swachitram.vercel.app/',
    image: '/swachithram.png',
    results: [
      { val: '500+', label: 'Happy Customers' },
      { val: '100%', label: 'Handmade' },
      { val: '4.9★', label: 'Avg Rating' },
    ],
  },
  {
    tags: ['Restaurant', 'Web Design', 'Brand Identity'],
    title: 'Fuko: Korean Restaurant',
    desc: 'A vibrant website for Fuko, a Korean restaurant based in the UK, built to bring their brand online with a bold, modern design and a smooth browsing experience for customers exploring the menu.',
    link: 'https://fuko-website.vercel.app/',
    image: '/fuko.png',
    results: [
      { val: 'UK', label: 'Based' },
      { val: '100%', label: 'Custom Build' },
      { val: '5★', label: 'Client Rating' },
    ],
  },
];

const projects = [
  {
    tags: ['Portfolio', 'Creative'],
    title: 'Coming Soon',
    desc: "Another project is underway. We only show work we're truly proud of. Check back shortly.",
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
        background: 'linear-gradient(135deg, #0B1120 0%, #1e1b4b 50%, #0B1120 100%)',
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
            <span>Our Work</span>
          </div>
          <h2 className="section-title">Websites We&apos;ve Built</h2>
          <p className="section-desc">
            Real projects for real businesses, designed with purpose and built to make an impact.
          </p>
        </FadeIn>

        {featuredProjects.map((featured) => (
          <ScaleIn className="pf-featured" key={featured.title}>
            <div className="glass-card pf-card">
              <div className="pf-visual" style={{ position: 'relative' }}>
                <DeviceFrame>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="pf-screenshot"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/icons.svg';
                    }}
                    style={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </DeviceFrame>
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-hover-overlay"
                  aria-label={`View ${featured.title}`}
                >
                  <div className="pf-hover-content">
                    <span>View Live Site ↗</span>
                  </div>
                </a>
                <div className="pf-device-glow" />
              </div>

              <div className="pf-info">
                <div className="pf-tags">
                  {featured.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.desc}</p>
                <div className="pf-results">
                  {featured.results.map((result) => (
                    <div key={result.label} className="pf-result">
                      <span className="pf-result-val">{result.val}</span>
                      <span className="pf-result-lab">{result.label}</span>
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
        ))}

        <StaggerContainer stagger={0.15} className="pf-grid">
          {projects.map((project) => (
            <StaggerItem key={project.title + project.desc}>
              <HoverLift className="glass-card tilt-card pf-card" lift={-8}>
                <div className="pf-visual-sm">
                  <DeviceFrameSm>
                    <Placeholder height={180} label={project.title} />
                  </DeviceFrameSm>
                  <div className="pf-hover-overlay">
                    <div className="pf-hover-content">
                      <span>Coming Soon</span>
                    </div>
                  </div>
                </div>
                <div className="pf-info-sm">
                  <div className="pf-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
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

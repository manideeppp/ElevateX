import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from './MotionPrimitives';

const testimonials = [
  {
    text: '"ElevateX completely transformed our online presence. Revenue jumped 340% in three months and our bounce rate dropped to almost nothing. Best investment we\'ve made."',
    name: 'Sarah Chen',
    role: 'CEO, NovaTech',
    stars: 5,
    featured: true,
  },
  {
    text: '"The team delivered a SaaS dashboard that our users genuinely love. The attention to micro-interactions and performance was beyond anything we expected."',
    name: 'Marcus Rivera',
    role: 'CTO, PulseBoard',
    stars: 5,
    featured: false,
  },
  {
    text: '"Working with ElevateX felt like having an in-house team. Transparent communication, fast delivery, and the final product outperformed all our KPIs."',
    name: 'Anya Patel',
    role: 'VP Marketing, VaultPay',
    stars: 5,
    featured: false,
  },
];

function TestiCard({ t }) {
  return (
    <StaggerItem>
      <HoverLift
        className={`glass-card testi-card${t.featured ? ' tc-featured' : ''}`}
        lift={-6}
      >
        <span className="tc-quote">&ldquo;</span>
        <p className="tc-text">{t.text}</p>
        <div className="tc-author">
          <div
            className="tc-avatar"
            style={{
              background: 'var(--gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            {t.name.charAt(0)}
          </div>
          <div>
            <span className="tc-name">{t.name}</span>
            <span className="tc-role" style={{ display: 'block' }}>{t.role}</span>
          </div>
        </div>
        <div className="tc-stars">{'★'.repeat(t.stars)}</div>
      </HoverLift>
    </StaggerItem>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-1" />
        <div className="sbg-orb sbg-orb-4" />
      </div>
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Client Love</span>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">
            Don&apos;t take our word for it — hear from the brands we&apos;ve helped grow.
          </p>
        </FadeIn>
        <StaggerContainer stagger={0.12} className="testi-grid">
          {testimonials.map((t) => (
            <TestiCard key={t.name} t={t} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from './MotionPrimitives';

const testimonials = [
  {
    text: '"ElevateX built us a complete e-commerce platform from the ground up — admin portal, secure authentication, payment gateway, all of it. Our handcrafted art and custom portraits now reach customers seamlessly online. Truly a best-in-class experience."',
    name: 'Sakshari Reddy',
    role: 'Founder, Swachithram, Hyderabad, India',
    stars: 5,
    featured: true,
  },
  {
    text: '"ElevateX understood exactly what our brand needed. The website captures the feel of authentic Korean dining and makes it effortless for customers across the UK to discover and book with us."',
    name: 'Bhargav',
    role: 'Fuko Restaurants Pvt Ltd, London, UK',
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
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, HoverLift } from './MotionPrimitives';

const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    iconClass: 'icon-3d-shield',
    title: 'Your Vision Comes First',
    desc: 'We take the time to understand your brand, your audience, and your goals before we design a single page.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    iconClass: 'icon-3d-code',
    title: 'Crafted With Care',
    desc: 'Every website we deliver is built with attention to detail — fast, polished, and designed to leave a lasting impression.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    iconClass: 'icon-3d-chart',
    title: 'Real Results',
    desc: 'Our websites don\'t just look great — they help you attract more customers, build trust, and grow your business.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    iconClass: 'icon-3d-rocket',
    title: 'True Partnership',
    desc: 'You\'ll always know what\'s happening. We keep you in the loop with regular updates and honest, open communication.',
  },
];

function WhyCard({ item }) {
  return (
    <StaggerItem>
      <HoverLift className="glass-card why-card" lift={-6}>
        <div className="wc-icon">
          <div className={`icon-3d ${item.iconClass}`}>
            {item.icon}
          </div>
        </div>
        <div className="wc-body">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </HoverLift>
    </StaggerItem>
  );
}

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-5" />
        <div className="sbg-orb sbg-orb-2" />
      </div>
      <div className="container">
        <div className="why-layout">
          <SlideIn from="left" className="why-left">
            <div className="section-eyebrow" style={{ justifyContent: 'flex-start' }}>
              <span className="eyebrow-line" />
              <span>Why ElevateX</span>
            </div>
            <h2 className="section-title tl">Why Work<br />With Us.</h2>
            <p className="section-desc tl">
              We don&apos;t do cookie-cutter websites. Every project is made from scratch
              to match your brand, connect with your audience, and help your business grow.
            </p>
          </SlideIn>
          <StaggerContainer stagger={0.12} className="why-right">
            {reasons.map((item) => (
              <WhyCard key={item.title} item={item} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

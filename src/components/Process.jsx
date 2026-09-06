import { motion } from 'motion/react';
import { FadeIn } from './MotionPrimitives';

const ease = [0.16, 1, 0.3, 1];

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We dive deep into your brand, audience, and goals — mapping the strategy that sets every decision.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Pixel-perfect visuals, intuitive UX, and a brand identity that commands attention and trust.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Clean, performant code — responsive, accessible, and engineered to scale with your ambitions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Rigorous testing, seamless deployment, and ongoing support to keep you ahead of the curve.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-1" />
        <div className="sbg-orb sbg-orb-3" />
      </div>
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span className="eyebrow-line" />
            <span>Our Process</span>
          </div>
          <h2 className="section-title">From Vision to Launch</h2>
          <p className="section-desc">
            A proven four-step framework that turns ambitious ideas into digital experiences that perform.
          </p>
        </FadeIn>

        <div className="process-timeline">
          <div className="process-line" aria-hidden="true" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="process-step glass-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="process-step-marker">
                <span className="process-step-num">{step.num}</span>
              </div>
              <div className="process-step-icon">{step.icon}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

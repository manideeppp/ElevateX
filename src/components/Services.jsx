import { motion } from 'motion/react';
import { FadeIn } from './MotionPrimitives';

const ease = [0.16, 1, 0.3, 1];

const offerings = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We learn your brand, audience, and goals, then map a clear plan to bring your vision to life online.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Visual Design',
    desc: 'Every layout, colour, and detail is crafted to reflect your identity and guide visitors toward action.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Build & Launch',
    desc: 'Fast, responsive websites with rigorous testing and seamless deployment, so you don\'t have to worry.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: 'After launch we stay by your side with updates, performance monitoring, and continuous improvements.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-bg">
        <div className="sbg-orb sbg-orb-1" />
        <div className="sbg-orb sbg-orb-2" />
      </div>
      <div className="container">
        <FadeIn className="section-header">
          <div className="section-eyebrow">
            <span>What We Do</span>
          </div>
          <h2 className="section-title">Crafted for Impact</h2>
          <p className="section-desc">
            Beautiful, high-performing digital experiences tailored to your brand, from first
            concept to finished product and beyond.
          </p>
        </FadeIn>

        <div className="service-grid">
          {offerings.map((item, i) => (
            <motion.div
              key={item.num}
              className="service-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <span className="service-num">{item.num}</span>
              <div className="service-icon-wrap">{item.icon}</div>
              <h3 className="service-title">{item.title}</h3>
              <p className="service-desc">{item.desc}</p>
              <div className="service-glow" />
              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

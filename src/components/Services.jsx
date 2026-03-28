import { motion } from 'motion/react';
import { FadeIn } from './MotionPrimitives';

const ease = [0.16, 1, 0.3, 1];

const offerings = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We learn your brand, audience, and goals inside-out — then map a clear plan to bring your vision to life online.',
    accent: 'var(--accent-1)',
  },
  {
    num: '02',
    title: 'Visual Design',
    desc: 'Every layout, colour, and detail is crafted to reflect your identity and guide visitors toward action.',
    accent: 'var(--accent-2)',
  },
  {
    num: '03',
    title: 'Build & Launch',
    desc: 'We develop fast, responsive websites and handle every detail — from testing to going live — so you don\'t have to.',
    accent: 'var(--accent-3)',
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: 'After launch we stay by your side with updates, performance monitoring, and improvements that keep you ahead.',
    accent: 'var(--accent-4)',
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
            <span className="eyebrow-line" />
            <span>What We Do</span>
          </div>
          <h2 className="section-title">We Design Websites</h2>
          <p className="section-desc">
            Beautiful, high-performing websites tailored to your brand — from first
            concept to finished product and beyond.
          </p>
        </FadeIn>

        <div className="wwd-boxes">
          {offerings.map((item, i) => (
            <motion.div
              key={item.num}
              className="wwd-box glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <span className="wwd-num" style={{ color: item.accent }}>{item.num}</span>
              <div className="wwd-border" style={{ background: item.accent }} />
              <h3 className="wwd-title">{item.title}</h3>
              <p className="wwd-desc">{item.desc}</p>
              <div className="wwd-glow" style={{ background: `radial-gradient(circle, ${item.accent}15, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

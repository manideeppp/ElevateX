import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './MotionPrimitives';

const testimonials = [
  {
    text: '"ElevateX built us a complete e-commerce platform from the ground up — admin portal, secure authentication, payment gateway, all of it. Our handcrafted art and custom portraits now reach customers seamlessly online. Truly a best-in-class experience."',
    name: 'Sakshari Reddy',
    role: 'Founder, Swachithram, Hyderabad, India',
    stars: 5,
  },
  {
    text: '"ElevateX understood exactly what our brand needed. The website captures the feel of authentic Korean dining and makes it effortless for customers across the UK to discover and book with us."',
    name: 'Bhargav',
    role: 'Fuko Restaurants Pvt Ltd, London, UK',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

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

        <FadeIn className="testi-carousel-wrap">
          <div className="testi-carousel glass-card tc-featured">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="testi-slide"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
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
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testi-nav">
            <button className="testi-arrow" onClick={prev} aria-label="Previous testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot${i === active ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi-arrow" onClick={next} aria-label="Next testimonial">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

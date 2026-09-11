import { useEffect } from 'react';
import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ loaded }) {
  useEffect(() => {
    document.documentElement.dataset.heroLight = 'true';
    return () => {
      delete document.documentElement.dataset.heroLight;
    };
  }, []);

  return (
    <section className="hero hero-premium" id="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-copy">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <span>Web Design &amp; Development</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <span className="title-line">Websites That</span>
              <span className="title-line">
                <span className="hero-elevate">Elevate</span> Your Brand
              </span>
            </motion.h1>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              <span className="ht-design">Design.</span>
              <span className="ht-build"> Build.</span>
              <span className="ht-elevate"> Elevate.</span>
            </motion.p>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 25 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              Strategy-driven design and full-stack engineering for brands that refuse
              to blend in. No templates. No shortcuts. Just premium results.
            </motion.p>
          </div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            <a href="#contact" className="btn-primary btn-lg magnetic-btn">
              <span>Start Your Project</span>
              <span className="btn-icon" aria-hidden="true">→</span>
              <div className="btn-shine" />
            </a>
            <a href="#work" className="hero-btn-secondary">
              View Our Work
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual hero-visual-desktop"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <div className="hv-glow" aria-hidden="true" />
          <div className="hv-scene">
            <div className="hv-layer hv-main">
              <div className="hv-browser">
                <div className="hv-browser-bar">
                  <i /><i /><i />
                  <div className="hv-address-bar" />
                </div>
                <div className="hv-screen">
                  <div className="hv-dash-sidebar">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="hv-dash-nav-item" style={{ opacity: 1 - i * 0.15 }} />
                    ))}
                  </div>
                  <div className="hv-dash-main">
                    <div className="hv-dash-header" />
                    <div className="hv-dash-cards">
                      <div className="hv-dash-card hv-dc-1" />
                      <div className="hv-dash-card hv-dc-2" />
                      <div className="hv-dash-card hv-dc-3" />
                    </div>
                    <div className="hv-dash-chart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.65, ease }}
      >
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">10<span className="stat-suffix">+</span></span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <span className="stat-num">98<span className="stat-suffix">%</span></span>
            <span className="stat-label">Client Retention</span>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <span className="stat-num">2<span className="stat-suffix">+</span></span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useMouseParallax } from '../hooks/useMouseParallax';

const ease = [0.16, 1, 0.3, 1];

export default function Hero({ loaded }) {
  const mouse = useMouseParallax();

  return (
    <section className="hero" id="hero">
      {/* Background layers with parallax */}
      <div className="hero-bg">
        <motion.div
          className="hero-glow hero-glow-1"
          animate={{ x: mouse.x * 30, y: mouse.y * 20 }}
          transition={{ type: 'tween', duration: 0.8 }}
        />
        <motion.div
          className="hero-glow hero-glow-2"
          animate={{ x: mouse.x * -20, y: mouse.y * -15 }}
          transition={{ type: 'tween', duration: 0.8 }}
        />
        <motion.div
          className="hero-glow hero-glow-3"
          animate={{ x: mouse.x * 15, y: mouse.y * 10 }}
          transition={{ type: 'tween', duration: 0.8 }}
        />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-container">
        {/* ── Left: Bold messaging ── */}
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <span className="eyebrow-line" />
            <span>Premium Digital Agency</span>
            <span className="eyebrow-dot" />
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <span className="title-line">We Design</span>
            <span className="title-line">
              <span className="text-shimmer">Websites</span> That
            </span>
            <span className="title-line">
              <span className="text-shimmer">Elevate</span> Your Brand
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35, ease }}
          >
            Strategy-driven design &amp; full-stack engineering that turns ambitious brands into
            market leaders. No templates. No shortcuts.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            <a href="#contact" className="btn-primary btn-lg magnetic-btn">
              <span>Start Your Project</span>
              <span className="btn-icon">→</span>
              <div className="btn-shine" />
            </a>
            <a href="#work" className="btn-ghost btn-lg">
              View Our Work
            </a>
          </motion.div>

          {/* Inline stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease }}
          >
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
          </motion.div>
        </div>

        {/* ── Right: CSS 3D Visual ── */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <div className="hv-scene">
            {/* Main browser mockup */}
            <div className="hv-layer hv-main">
              <div className="hv-main-glow" />
              <div className="hv-browser">
                <div className="hv-browser-bar">
                  <i /><i /><i />
                  <div className="hv-address-bar" />
                </div>
                <div className="hv-screen">
                  {/* Fake dashboard UI */}
                  <div className="hv-dash-sidebar">
                    {[0,1,2,3,4].map(i => <div key={i} className="hv-dash-nav-item" style={{ opacity: 1 - i * 0.15 }} />)}
                  </div>
                  <div className="hv-dash-main">
                    <div className="hv-dash-header" />
                    <div className="hv-dash-cards">
                      <div className="hv-dash-card hv-dc-1" />
                      <div className="hv-dash-card hv-dc-2" />
                      <div className="hv-dash-card hv-dc-3" />
                    </div>
                    <div className="hv-dash-chart" />
                    <div className="hv-dash-rows">
                      {[0,1,2].map(i => <div key={i} className="hv-dash-row" style={{ opacity: 1 - i * 0.2 }} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating info cards */}
            <div className="hv-layer hv-float hv-float-speed glass-float hv-card-sm">
              <div className="icon-3d icon-3d-bolt" style={{ width: 32, height: 32, borderRadius: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div>
                <span className="hv-card-val">0.8s</span>
                <span className="hv-card-lab">Load Time</span>
              </div>
            </div>

            <div className="hv-layer hv-float hv-float-perf glass-float hv-card-sm">
              <div className="icon-3d icon-3d-chart" style={{ width: 32, height: 32, borderRadius: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <span className="hv-card-val">+340%</span>
                <span className="hv-card-lab">Growth</span>
              </div>
            </div>

            <div className="hv-layer hv-float hv-float-conv glass-float hv-card-sm">
              <div className="icon-3d icon-3d-cart" style={{ width: 32, height: 32, borderRadius: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
              </div>
              <div>
                <span className="hv-card-val">12.4%</span>
                <span className="hv-card-lab">Conv. Rate</span>
              </div>
            </div>

            <div className="hv-layer hv-float hv-float-check glass-float hv-card-sm">
              <div className="icon-3d icon-3d-shield" style={{ width: 32, height: 32, borderRadius: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <span className="hv-card-val">100</span>
                <span className="hv-card-lab">Lighthouse</span>
              </div>
            </div>

            <div className="hv-layer hv-float hv-float-code hv-code-card glass-float">
              <code>
                <span className="ck">async</span> <span className="cf">buildSite</span>(<span className="cp">ideas</span>){' '}
                <span className="cs">{'=> success'}</span>;
              </code>
            </div>

            {/* 3D Geometric Shapes */}
            <div className="hv-layer hv-3d-shape hv-shape-cube">
              <div className="cube-scene">
                <div className="cube">
                  <div className="cube-face cube-front" />
                  <div className="cube-face cube-back" />
                  <div className="cube-face cube-right" />
                  <div className="cube-face cube-left" />
                  <div className="cube-face cube-top" />
                  <div className="cube-face cube-bottom" />
                </div>
              </div>
            </div>

            <div className="hv-layer hv-3d-shape hv-shape-sphere">
              <div className="sphere">
                <div className="sphere-shine" />
              </div>
            </div>

            <div className="hv-layer hv-3d-shape hv-shape-torus">
              <div className="torus" />
            </div>

            <div className="hv-layer hv-3d-shape hv-shape-pyramid">
              <div className="pyramid-scene">
                <div className="pyramid">
                  <div className="pyramid-face pyramid-front" />
                  <div className="pyramid-face pyramid-right" />
                  <div className="pyramid-face pyramid-back" />
                  <div className="pyramid-face pyramid-left" />
                  <div className="pyramid-base" />
                </div>
              </div>
            </div>

            <div className="hv-layer hv-3d-shape hv-shape-diamond">
              <div className="diamond-scene">
                <div className="diamond">
                  <div className="diamond-top">
                    <div className="dt-f" />
                    <div className="dt-r" />
                    <div className="dt-b" />
                    <div className="dt-l" />
                  </div>
                  <div className="diamond-bot">
                    <div className="db-f" />
                    <div className="db-r" />
                    <div className="db-b" />
                    <div className="db-l" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}

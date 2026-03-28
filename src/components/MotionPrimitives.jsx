/**
 * Reusable Motion (Framer Motion) animation primitives.
 * Every section element can wrap its content for viewport-triggered,
 * staggered, smooth entrance animations.
 */
import { motion } from 'motion/react';

/* ── Fade-up on scroll ── */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 40,
  className = '',
  once = true,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Staggered children container ── */
export function StaggerContainer({
  children,
  stagger = 0.1,
  className = '',
  once = true,
  ...rest
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Child used inside StaggerContainer ── */
export function StaggerItem({ children, className = '', y = 40, ...rest }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Scale-in from small ── */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Slide-in from a direction ── */
export function SlideIn({
  children,
  from = 'left',
  delay = 0,
  duration = 0.7,
  distance = 60,
  className = '',
  once = true,
  ...rest
}) {
  const axis = from === 'left' || from === 'right' ? 'x' : 'y';
  const sign = from === 'left' || from === 'up' ? -1 : 1;
  return (
    <motion.div
      initial={{ opacity: 0, [axis]: sign * distance }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ── Hover lift for cards ── */
export function HoverLift({ children, className = '', lift = -6, ...rest }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: lift, transition: { duration: 0.3, ease: 'easeOut' } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

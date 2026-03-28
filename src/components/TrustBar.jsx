import { motion } from 'motion/react';

const services = [
  'Website Design',
  'Landing Pages',
  'E-Commerce',
  'Brand Identity',
  'UI/UX Design',
  'Responsive Design',
  'Admin Portals',
  'Payment Integration',
  'SEO Optimization',
  'Website Redesign',
];

export default function TrustBar() {
  // Duplicate the list for seamless infinite scroll
  const items = [...services, ...services];

  return (
    <motion.div
      className="trust-bar"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="marquee-track">
        {items.map((name, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

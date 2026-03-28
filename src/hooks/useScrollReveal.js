import { useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.05) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            setTimeout(() => entry.target.classList.add('revealed'), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px' }
    );

    io.observe(el);

    // Safety net fallback
    const timeout = setTimeout(() => {
      if (!el.classList.contains('revealed')) {
        el.classList.add('auto-revealed');
      }
    }, 3000);

    return () => {
      io.disconnect();
      clearTimeout(timeout);
    };
  }, [threshold]);

  return ref;
}

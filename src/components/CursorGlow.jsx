import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, gx = 0, gy = 0;
    let animId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', onMove);

    function tick() {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      if (ref.current) ref.current.style.transform = `translate(${gx - 250}px,${gy - 250}px)`;
      animId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <div className="cursor-glow" ref={ref} />;
}

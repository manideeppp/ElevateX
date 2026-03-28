import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, stars = [];
    const STAR_COUNT = 200;
    let animId;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.3,
          a: Math.random() * 0.6 + 0.2,
          speed: Math.random() * 0.3 + 0.05,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let tick = 0;
    function draw() {
      ctx.clearRect(0, 0, w, h);
      tick += 0.005;
      for (const s of stars) {
        const flicker = 0.5 + 0.5 * Math.sin(tick * 2 + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(199,210,254,${s.a * flicker})`;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < -5) { s.y = h + 5; s.x = Math.random() * w; }
      }
      animId = requestAnimationFrame(draw);
    }

    resize(); initStars(); draw();

    const onResize = () => { resize(); initStars(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" />;
}

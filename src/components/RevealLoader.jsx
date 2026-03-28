import { useEffect, useRef, useState } from 'react';

export default function RevealLoader({ onComplete }) {
  const progressRef = useRef(null);
  const [state, setState] = useState('loading'); // loading | opening | done | hidden

  useEffect(() => {
    document.body.classList.add('loader-active');

    let pct = 0;
    const timer = setInterval(() => {
      pct += Math.random() * 18 + 4;
      if (pct > 95) pct = 95;
      if (progressRef.current) progressRef.current.style.width = pct + '%';
    }, 180);

    const t1 = setTimeout(() => {
      clearInterval(timer);
      if (progressRef.current) progressRef.current.style.width = '100%';

      const t2 = setTimeout(() => {
        setState('opening');
        document.body.classList.remove('loader-active');

        const t3 = setTimeout(() => {
          setState('done');
          onComplete?.();
          const t4 = setTimeout(() => setState('hidden'), 100);
          return () => clearTimeout(t4);
        }, 900);
        return () => clearTimeout(t3);
      }, 400);
      return () => clearTimeout(t2);
    }, 2200);

    return () => {
      clearInterval(timer);
      clearTimeout(t1);
      document.body.classList.remove('loader-active');
    };
  }, [onComplete]);

  if (state === 'hidden') return null;

  const cls = [
    'reveal-loader',
    state === 'opening' && 'opening',
    state === 'done' && 'done',
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <div className="rl-lines">
        {[0,1,2,3,4,5,6,7].map(i => (
          <div key={i} className="rl-line" style={{ '--i': i }} />
        ))}
      </div>
      <div className="rl-content">
        <div className="rl-text">
          {[
            { ch: 'E', d: '0.35s' }, { ch: 'L', d: '0.25s' }, { ch: 'E', d: '0.15s' },
            { ch: 'V', d: '0.05s' }, { ch: 'A', d: '0s' }, { ch: 'T', d: '0.05s' },
            { ch: 'E', d: '0.15s' }, { ch: '\u00A0', d: '0.25s', space: true },
            { ch: 'X', d: '0.3s', x: true },
          ].map((c, i) => (
            <span
              key={i}
              className={`rl-char${c.space ? ' rl-space' : ''}${c.x ? ' rl-x' : ''}`}
              style={{ '--d': c.d }}
            >
              {c.ch}
            </span>
          ))}
        </div>
        <div className="rl-tagline">Premium Digital Agency</div>
        <div className="rl-progress-wrap">
          <div className="rl-progress" ref={progressRef} />
        </div>
      </div>
      <div className="rl-curtain rl-curtain-left" />
      <div className="rl-curtain rl-curtain-right" />
    </div>
  );
}

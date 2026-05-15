import { useEffect, useRef } from 'react';

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

function animateCounter(el, start, end, suffix, duration) {
  const range = end - start;
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = Math.floor(start + range * easeOutCubic(progress)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = end + suffix;
  }
  requestAnimationFrame(step);
}

const stats = [
  { target: 1987, start: 1980, suffix: '', desc: 'Year Established' },
  { target: 37,   start: 0,    suffix: '+', desc: 'Years in Operation' },
  { target: 4,    start: 0,    suffix: '', desc: 'Strategic Divisions' },
  { target: 4,    start: 0,    suffix: '', desc: 'Global Partners' },
];

export default function Stats() {
  const refs = useRef([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const idx = parseInt(el.dataset.idx);
          const s = stats[idx];
          animateCounter(el, s.start, s.target, s.suffix, 1600);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    refs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.desc} className={`stat-block reveal-up${i > 0 ? ` delay-${i}` : ''}`}>
              <div
                className="stat-value"
                data-idx={i}
                ref={el => refs.current[i] = el}
              >
                {s.target}{s.suffix}
              </div>
              <div className="stat-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

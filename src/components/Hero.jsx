import { useEffect, useRef } from 'react';

const CFG = {
  count: 72,
  maxDist: 150,
  speed: 0.45,
  dotR: 1.4,
  goldRatio: 0.28,
  mouseRadius: 120,
  mouseForce: 0.55,
  damping: 0.992,
  minSpeed: 0.18,
  GOLD: '240,180,41',
  WHITE: '255,255,255',
};

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let raf;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticle() {
      const angle = Math.random() * Math.PI * 2;
      const spd = CFG.minSpeed + Math.random() * (CFG.speed - CFG.minSpeed);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        r: CFG.dotR * (0.5 + Math.random() * 0.9),
        gold: Math.random() < CFG.goldRatio,
      };
    }

    function init() {
      particles = [];
      for (let i = 0; i < CFG.count; i++) particles.push(createParticle());
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width, H = canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const mdst = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdst > 0 && mdst < CFG.mouseRadius) {
          const force = (CFG.mouseRadius - mdst) / CFG.mouseRadius * CFG.mouseForce;
          p.vx += (mdx / mdst) * force;
          p.vy += (mdy / mdst) * force;
        }
        p.vx *= CFG.damping;
        p.vy *= CFG.damping;
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd < CFG.minSpeed && spd > 0) { p.vx = (p.vx / spd) * CFG.minSpeed; p.vy = (p.vy / spd) * CFG.minSpeed; }
        if (spd > 3) { p.vx = (p.vx / spd) * 3; p.vy = (p.vy / spd) * 3; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
        if (p.y < -4) p.y = H + 4;
        if (p.y > H + 4) p.y = -4;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= CFG.maxDist) continue;
          const alpha = (1 - dist / CFG.maxDist) * 0.18;
          const color = (a.gold || b.gold) ? CFG.GOLD : CFG.WHITE;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${color},${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const color = p.gold ? CFG.GOLD : CFG.WHITE;
        const alpha = p.gold ? 0.65 : 0.28;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        if (p.gold) {
          ctx.beginPath();
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
          grd.addColorStop(0, `rgba(${CFG.GOLD},0.28)`);
          grd.addColorStop(1, `rgba(${CFG.GOLD},0)`);
          ctx.fillStyle = grd;
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    const heroSection = heroRef.current;
    if (heroSection) {
      heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
      heroSection.addEventListener('mouseleave', onMouseLeave);
    }

    const visObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { if (!raf) tick(); }
      else { if (raf) { cancelAnimationFrame(raf); raf = null; } }
    }, { threshold: 0 });
    visObserver.observe(canvas);

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { resize(); init(); }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });

    resize();
    init();
    tick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      visObserver.disconnect();
      window.removeEventListener('resize', onResize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', onMouseMove);
        heroSection.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <canvas id="heroCanvas" ref={canvasRef} aria-hidden="true"></canvas>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge reveal-up">
            <span className="badge-dot"></span>
            Est. 1987 &nbsp;·&nbsp; Global Enterprise Holdings &nbsp;·&nbsp; LLC
          </div>
          <h1 className="hero-title reveal-up delay-1">
            Transforming Industries.<br />
            <em>Building Legacies.</em>
          </h1>
          <p className="hero-subtitle reveal-up delay-2">
            A privately held global enterprise conglomerate delivering
            institutional-grade solutions across engineering, technology,
            sustainable agriculture, and strategic investment verticals.
          </p>
          <div className="hero-ctas reveal-up delay-3">
            <a href="#divisions" className="btn btn-gold" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>
              Explore Our Enterprise
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              Strategic Inquiry <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-stats reveal-up delay-4">
            <div className="hero-stat">
              <span className="stat-num">1987</span>
              <span className="stat-lbl">Founded</span>
            </div>
            <div className="stat-sep"></div>
            <div className="hero-stat">
              <span className="stat-num">37+</span>
              <span className="stat-lbl">Years Global Operations</span>
            </div>
            <div className="stat-sep"></div>
            <div className="hero-stat">
              <span className="stat-num">4</span>
              <span className="stat-lbl">Strategic Divisions</span>
            </div>
            <div className="stat-sep"></div>
            <div className="hero-stat">
              <span className="stat-num">Global</span>
              <span className="stat-lbl">Market Presence</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}

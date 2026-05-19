export default function CtaSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section className="cta-section">
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-content">
          <div className="section-label reveal-up cta-label">Strategic Partnership</div>
          <h2 className="cta-title reveal-up delay-1">
            Ready to Build Something<br /><em>Extraordinary Together?</em>
          </h2>
          <p className="cta-text reveal-up delay-2">
            Whether you're seeking strategic advisory, enterprise partnership, or investment alignment —
            TLBISBIG has the experience, infrastructure, and vision to deliver transformative outcomes.
          </p>
          <div className="cta-actions reveal-up delay-3">
            <a href="#contact" className="btn btn-gold btn-lg" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              Initiate Strategic Inquiry
            </a>
            <a href="#divisions" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>
              Explore Divisions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

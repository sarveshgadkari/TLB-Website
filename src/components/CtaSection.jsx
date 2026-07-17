import Link from 'next/link';

export default function CtaSection() {
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
            <Link href="/contact" className="btn btn-gold btn-lg">
              Initiate Strategic Inquiry
            </Link>
            <Link href="/divisions" className="btn btn-outline btn-lg">
              Explore Divisions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

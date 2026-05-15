export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-label reveal-left">About TLB</div>
            <h2 className="section-title reveal-left delay-1">
              Thirty-Seven Years of<br />
              <em>Strategic Excellence</em>
            </h2>
            <div className="gold-line reveal-left delay-1"></div>
            <p className="about-text reveal-left delay-2">
              TLB Is Big Consulting Group, LLC is a privately held global enterprise conglomerate
              founded in 1987. What began as a visionary consulting practice has evolved into a
              diversified strategic investment platform spanning engineering, technology, sustainable
              agriculture, and emerging industry verticals.
            </p>
            <p className="about-text reveal-left delay-3">
              With operations across multiple markets and a portfolio of high-impact business units,
              TLB delivers institutional-grade solutions to governments, corporations, and communities
              worldwide. Our integrated approach combines deep domain expertise with strategic capital
              allocation to create lasting enterprise value.
            </p>
            <div className="about-pillars reveal-left delay-4">
              <div className="pillar-item">
                <i className="fas fa-globe pillar-icon"></i>
                <div>
                  <strong>Global Reach</strong>
                  <p>Operations spanning multiple international markets and industry verticals</p>
                </div>
              </div>
              <div className="pillar-item">
                <i className="fas fa-chart-line pillar-icon"></i>
                <div>
                  <strong>Proven Growth</strong>
                  <p>Consistent expansion across diversified enterprise portfolios since 1987</p>
                </div>
              </div>
              <div className="pillar-item">
                <i className="fas fa-handshake pillar-icon"></i>
                <div>
                  <strong>Strategic Partnerships</strong>
                  <p>A curated network of global enterprise partners and co-investors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right reveal-right">
            <div className="about-card">
              <div className="about-card-year">1987</div>
              <div className="about-card-label">Year of Foundation</div>
              <div className="about-card-divider"></div>
              <div className="about-card-mission">
                <p>"Founded on the conviction that strategic thinking, institutional discipline, and bold execution can transform markets — and build legacies that endure across generations."</p>
              </div>
              <div className="about-card-footer">
                <span>TLB Is Big Consulting Group, LLC</span>
              </div>
            </div>
            <div className="about-accent-block">
              <div className="accent-num">37+</div>
              <div className="accent-text">Years of<br />Global Operations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

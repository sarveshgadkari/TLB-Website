export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                <img
                  className="footer-logo-img"
                  src="https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob.png/:/rs=w:165,h:169,cg:true,m/cr=w:165,h:169/qt=q:100/ll"
                  alt="TLBISBIG"
                />
                <div className="logo-text-wrap">
                  <span className="logo-tlb">TLBISBIG</span>
                </div>
              </a>
              <p className="footer-tagline">Building Legacies. Driving Global Impact.</p>
              <p className="footer-desc">
                A privately held global enterprise conglomerate delivering institutional-grade solutions
                across engineering, technology, and strategic investment verticals since 1987.
              </p>
              <div className="social-links footer-social">
                <a href="https://www.linkedin.com/company/tlb-enterprises-group-holdings/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/TLBPromoProducts" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@TLBISBIGConsultingGroup" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Enterprise</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About TLBISBIG</a></li>
                <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>Our Divisions</a></li>
                <li><a href="#ecosystem" onClick={(e) => { e.preventDefault(); scrollTo('ecosystem'); }}>Partner Ecosystem</a></li>
                <li><a href="#heritage" onClick={(e) => { e.preventDefault(); scrollTo('heritage'); }}>Our Heritage</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Divisions</h4>
              <ul className="footer-links">
                <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>Engineering &amp; Architecture</a></li>
                <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>TLBISBIG Enterprises Agriculture</a></li>
                <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>E-Commerce Platform</a></li>
                <li><a href="#divisions" onClick={(e) => { e.preventDefault(); scrollTo('divisions'); }}>Strategic Advisory</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-links">
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Strategic Inquiry</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Partnership</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Investment</a></li>
              </ul>
              <div className="footer-badge">
                <span>Est.</span>
                <strong>1987</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 TLBISBIG. All rights reserved.</p>
            <p>Global Enterprise &amp; Strategic Investment Holdings</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

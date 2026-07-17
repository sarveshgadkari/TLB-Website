import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img
                  className="footer-logo-img"
                  src="https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob.png/:/rs=w:165,h:169,cg:true,m/cr=w:165,h:169/qt=q:100/ll"
                  alt="TLBISBIG"
                />
                <div className="logo-text-wrap">
                  <span className="logo-tlb">TLBISBIG</span>
                </div>
              </Link>
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
                <li><Link href="/about">About TLBISBIG</Link></li>
                <li><Link href="/divisions">Our Divisions</Link></li>
                <li><Link href="/ecosystem">Partner Ecosystem</Link></li>
                <li><Link href="/heritage">Our Heritage</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Divisions</h4>
              <ul className="footer-links">
                <li><Link href="/divisions">Engineering &amp; Architecture</Link></li>
                <li><Link href="/divisions">TLBISBIG Enterprises Agriculture</Link></li>
                <li><Link href="/divisions">E-Commerce Platform</Link></li>
                <li><Link href="/divisions">Strategic Advisory</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <h4 className="footer-col-title">Connect</h4>
              <ul className="footer-links">
                <li><Link href="/contact">Strategic Inquiry</Link></li>
                <li><Link href="/contact">Partnership</Link></li>
                <li><Link href="/contact">Investment</Link></li>
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

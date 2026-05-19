import { useState, useEffect, useRef } from 'react';

const NAV_OFFSET = 76;

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const navLinksRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLink = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  const links = [
    { id: 'about', label: 'About' },
    { id: 'divisions', label: 'Divisions' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'heritage', label: 'Heritage' },
  ];

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <img
            className="nav-logo-img"
            src="https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob.png/:/rs=w:165,h:169,cg:true,m/cr=w:165,h:169/qt=q:100/ll"
            alt="TLBISBIG logo"
          />
          <div className="logo-text-wrap">
            <span className="logo-tlb">TLBISBIG</span>
            <span className="logo-sub">Est. 1987 · LLC</span>
          </div>
        </a>

        <div
          id="nav-menu"
          className={`nav-links${menuOpen ? ' open' : ''}`}
          ref={navLinksRef}
          aria-hidden={!menuOpen}
        >
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${activeId === id ? ' nav-active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLink(id); }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-link nav-cta"
            onClick={(e) => { e.preventDefault(); handleLink('contact'); }}
          >
            Strategic Inquiry
          </a>
          <a
            href="https://tlbisbigworld.espwebsites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-login"
          >
            <i className="fas fa-user-circle"></i>
            <span>WSO Login</span>
          </a>
        </div>

        <div className="nav-right-actions">
          <a
            href="https://tlbisbigworld.espwebsites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-login nav-login-mobile"
          >
            <i className="fas fa-user-circle"></i>
          </a>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinksRef = useRef(null);

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

  const links = [
    { href: '/about', label: 'About' },
    { href: '/divisions', label: 'Divisions' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/heritage', label: 'Heritage' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="nav scrolled" id="navbar">
      <div className="container nav-container">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img
            className="nav-logo-img"
            src="https://img1.wsimg.com/isteam/ip/adc6a11b-2ba2-4e2a-b8d3-0e4e50140ce1/blob.png/:/rs=w:165,h:169,cg:true,m/cr=w:165,h:169/qt=q:100/ll"
            alt="TLBISBIG logo"
          />
          <div className="logo-text-wrap">
            <span className="logo-tlb">TLBISBIG</span>
            <span className="logo-sub">Est. 1987 · LLC</span>
          </div>
        </Link>

        <div
          id="nav-menu"
          className={`nav-links${menuOpen ? ' open' : ''}`}
          ref={navLinksRef}
          aria-hidden={!menuOpen}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link${pathname === href ? ' nav-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="nav-link nav-cta" onClick={() => setMenuOpen(false)}>
            Strategic Inquiry
          </Link>
          <a
            href="https://wsso.vercel.app/"
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
            href="https://wsso.vercel.app/"
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

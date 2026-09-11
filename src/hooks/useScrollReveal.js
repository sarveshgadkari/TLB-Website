'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = '.reveal-up, .reveal-left, .reveal-right';

function revealIfInView(el, observer) {
  const rect = el.getBoundingClientRect();
  const inView = rect.top < window.innerHeight + 80 && rect.bottom > -80;
  if (inView) {
    el.classList.add('visible');
    observer?.unobserve(el);
  }
}

export function useScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const els = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    if (els.length === 0) return undefined;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '80px 0px 80px 0px' },
    );

    els.forEach((el) => observer.observe(el));

    const revealVisible = () => {
      els.forEach((el) => revealIfInView(el, observer));
    };

    const raf = window.requestAnimationFrame(revealVisible);
    const timeout = window.setTimeout(revealVisible, 50);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);
}

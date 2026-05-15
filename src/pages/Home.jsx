import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/Hero';
import About from '../components/About';
import Divisions from '../components/Divisions';
import Stats from '../components/Stats';
import Ecosystem from '../components/Ecosystem';
import Heritage from '../components/Heritage';
import CtaSection from '../components/CtaSection';
import Contact from '../components/Contact';

export default function Home() {
  useScrollReveal();
  return (
    <main>
      <Hero />
      <About />
      <Divisions />
      <Stats />
      <Ecosystem />
      <Heritage />
      <CtaSection />
      <Contact />
    </main>
  );
}

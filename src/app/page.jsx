import Hero from '../components/Hero';
import About from '../components/About';
import Divisions from '../components/Divisions';
import Stats from '../components/Stats';
import Ecosystem from '../components/Ecosystem';
import Heritage from '../components/Heritage';
import CtaSection from '../components/CtaSection';
import Contact from '../components/Contact';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema } from '../lib/seo';
import { siteDescription, siteName } from '../lib/site';

export const metadata = {
  title: siteName,
  description: siteDescription,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
      <Hero />
      <About />
      <Divisions />
      <Stats />
      <Ecosystem />
      <Heritage />
      <CtaSection />
      <Contact />
    </>
  );
}
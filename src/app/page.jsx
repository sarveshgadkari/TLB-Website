import Hero from '../components/Hero';
import About from '../components/About';
import Divisions from '../components/Divisions';
import SolutionsPreview from '../components/SolutionsPreview';
import Stats from '../components/Stats';
import Ecosystem from '../components/Ecosystem';
import Heritage from '../components/Heritage';
import CtaSection from '../components/CtaSection';
import Contact from '../components/Contact';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, pageMetadata } from '../lib/seo';
import { siteDescription, siteName } from '../lib/site';

export const metadata = {
  ...pageMetadata({
    title: { absolute: siteName },
    description: siteDescription,
    path: '/',
  }),
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }])} />
      <Hero />
      <About />
      <Divisions />
      <SolutionsPreview />
      <Stats />
      <Ecosystem />
      <Heritage />
      <CtaSection />
      <Contact />
    </>
  );
}
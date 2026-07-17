import About from '../../components/About';
import Stats from '../../components/Stats';
import Heritage from '../../components/Heritage';
import CtaSection from '../../components/CtaSection';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'About',
  description: 'Learn about the history, mission, and strategic foundation of TLBISBIG Consulting Group.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />
      <PageHero
        eyebrow="About TLBISBIG"
        title="Thirty-Seven Years of Strategic Excellence"
        description="TLBISBIG is a global enterprise platform built on disciplined execution, diversified verticals, and long-term value creation."
        primaryAction={{ href: '/contact', label: 'Start a Conversation' }}
        secondaryAction={{ href: '/divisions', label: 'Explore Divisions' }}
      />
      <About />
      <Stats />
      <Heritage />
      <CtaSection />
    </>
  );
}
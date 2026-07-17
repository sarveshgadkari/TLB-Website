import Divisions from '../../components/Divisions';
import CtaSection from '../../components/CtaSection';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Divisions',
  description: 'Explore the strategic divisions that power the TLBISBIG enterprise ecosystem.',
  alternates: { canonical: '/divisions' },
};

export default function DivisionsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Divisions', path: '/divisions' }])} />
      <PageHero
        eyebrow="Business Architecture"
        title="Strategic Divisions Built for Scale"
        description="A diversified portfolio spanning engineering, agriculture, e-commerce, and enterprise advisory, each aligned to measurable long-term impact."
        primaryAction={{ href: '/contact', label: 'Discuss a Partnership' }}
        secondaryAction={{ href: '/ecosystem', label: 'Meet Our Partners' }}
      />
      <Divisions />
      <CtaSection />
    </>
  );
}
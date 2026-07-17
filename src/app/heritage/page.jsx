import Heritage from '../../components/Heritage';
import CtaSection from '../../components/CtaSection';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Heritage',
  description: 'Trace the history and evolution of TLBISBIG Consulting Group from 1987 to today.',
  alternates: { canonical: '/heritage' },
};

export default function HeritagePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Heritage', path: '/heritage' }])} />
      <PageHero
        eyebrow="Our Story"
        title="A Legacy Built Over Decades"
        description="From a bold consulting practice in 1987 to a diversified global enterprise, our history reflects disciplined growth and strategic vision."
        primaryAction={{ href: '/about', label: 'Back to About' }}
        secondaryAction={{ href: '/contact', label: 'Strategic Inquiry' }}
      />
      <Heritage />
      <CtaSection />
    </>
  );
}
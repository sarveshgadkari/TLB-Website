import Ecosystem from '../../components/Ecosystem';
import CtaSection from '../../components/CtaSection';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema, pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: 'Partner Ecosystem',
  description: 'Discover the strategic partner network surrounding TLBISBIG Consulting Group.',
  path: '/ecosystem',
});

export default function EcosystemPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Ecosystem', path: '/ecosystem' }])} />
      <PageHero
        eyebrow="Strategic Network"
        title="Our Ecosystem of Partners"
        description="TLBISBIG operates at the center of a curated network of high-value strategic partnerships that extend our reach and capability."
        primaryAction={{ href: '/contact', label: 'Become a Partner' }}
        secondaryAction={{ href: '/about', label: 'Learn About Us' }}
      />
      <Ecosystem />
      <CtaSection />
    </>
  );
}
import Contact from '../../components/Contact';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Contact',
  description: 'Contact TLBISBIG Consulting Group for strategic partnerships, investment, and enterprise inquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <PageHero
        eyebrow="Get in Touch"
        title="Strategic Inquiry & Partnership"
        description="Share your objectives and our team will explore how TLBISBIG can deliver value across advisory, investment, and operating partnerships."
        primaryAction={{ href: '/divisions', label: 'View Divisions' }}
        secondaryAction={{ href: '/ecosystem', label: 'Explore Partners' }}
      />
      <Contact />
    </>
  );
}
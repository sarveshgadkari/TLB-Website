import ResearchHub from '../../components/ResearchHub';
import CtaSection from '../../components/CtaSection';
import PageHero from '../../components/PageHero';
import StructuredData from '../../components/StructuredData';
import { breadcrumbSchema } from '../../lib/seo';

export const metadata = {
  title: 'Research Allocation Hub',
  description:
    'Explore TLBISBIG third-party platforms — Zoho, QuickBooks, Slack, Google Workspace, Microsoft 365, Salesforce, and more. Expand any tool for allocation guidance and submit an enquiry stored in our CRM.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }])} />
      <PageHero
        eyebrow="Research Allocation Hub"
        title="Choose the Right Platform. Enquire from the Source."
        description="A circular allocation desk for the applications we sell and implement. Open any outer-ring tool for a brief, then send a CRM-tracked enquiry without leaving that platform."
        primaryAction={{ href: '#research-hub', label: 'Open the Hub' }}
        secondaryAction={{ href: '/contact', label: 'General Inquiry' }}
      />
      <ResearchHub />
      <CtaSection />
    </>
  );
}

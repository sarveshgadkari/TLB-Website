import { siteDescription, siteName, siteUrl } from './site';

export const ogImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: `${siteName} — Building Legacies. Driving Global Impact.`,
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: siteName,
    legalName: 'TLBISBIG Consulting Group, LLC',
    url: siteUrl,
    description: siteDescription,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    foundingDate: '1987',
    areaServed: 'US',
    sameAs: [
      'https://www.linkedin.com/company/tlb-enterprises-group-holdings/posts/?feedView=all',
      'https://www.facebook.com/TLBPromoProducts',
      'https://www.youtube.com/@TLBISBIGConsultingGroup',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function pageMetadata({ title, description, path, keywords }) {
  const url = `${siteUrl}${path}`;
  const ogTitle = path === '/' ? siteName : `${title} | ${siteName}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [ogImage.url],
    },
  };
}

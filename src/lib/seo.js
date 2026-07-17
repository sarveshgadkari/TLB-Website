import { siteDescription, siteName, siteUrl } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    logo: `${siteUrl}/sfg-logo-cropped.png`,
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/contact`,
      'query-input': 'required name=search_term_string',
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
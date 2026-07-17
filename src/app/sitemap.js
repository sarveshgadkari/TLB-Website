import { siteUrl } from '../lib/site';

const routes = ['/', '/about', '/divisions', '/ecosystem', '/heritage', '/contact'];

export default function sitemap() {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
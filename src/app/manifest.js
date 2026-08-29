import { siteDescription, siteName } from '../lib/site';

export default function manifest() {
  return {
    name: siteName,
    short_name: 'TLBISBIG',
    description: siteDescription,
    start_url: '/',
    display: 'browser',
    background_color: '#07080F',
    theme_color: '#F0B429',
    icons: [
      { src: '/logo.png', sizes: '165x169', type: 'image/png', purpose: 'any' },
    ],
  };
}

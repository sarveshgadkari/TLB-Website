import { Cormorant_Garamond, Inter, Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollRevealProvider from '../components/ScrollRevealProvider';
import StructuredData from '../components/StructuredData';
import InquiryPopup from '../components/InquiryPopup';
import { ogImage, organizationSchema, websiteSchema } from '../lib/seo';
import { siteDescription, siteName, siteUrl } from '../lib/site';
import '../index.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-cormorant' });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'business',
  keywords: [
    'TLBISBIG',
    'TLBISBIG Consulting Group',
    'enterprise holdings',
    'strategic partnerships',
    'engineering consulting',
    'sustainable agriculture',
    'investment advisory',
    'SME digital solutions',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName,
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage.url],
  },
};

export const viewport = {
  themeColor: '#07080F',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <StructuredData data={organizationSchema()} />
        <StructuredData data={websiteSchema()} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${poppins.variable} ${cormorant.variable}`}
        style={{
          '--font-body': 'var(--font-inter)',
          '--font-head': 'var(--font-poppins)',
          '--font-display': 'var(--font-cormorant)',
        }}
      >
        <Navbar />
        <ScrollRevealProvider>
          <main>{children}</main>
        </ScrollRevealProvider>
        <Footer />
        <InquiryPopup />
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/client-providers'
import AnalyticsConsent from '@/components/analytics-consent'
import { founderPersonSchema, organizationSchema } from '@/lib/organization-schema'

const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

// Search verification (Google Search Console / Bing) — REMOVED in the
// PakListings rebrand (2026-11-06). The old verification codes verified the
// previous domain/setup and do NOT carry over to paklistings.com. After the
// user buys the domain, re-add fresh verification meta tags here (or via
// NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION / NEXT_PUBLIC_BING_SITE_VERIFICATION)
// once Search Console and Bing Webmaster Tools issue new codes for the new
// domain. Google Analytics / gtag IDs are unchanged (not domain-bound).

export const metadata: Metadata = {
  title: "PakListings – Pakistan Business Directory & Yellow Pages",
  description: "PakListings — Pakistan business directory and yellow pages. Find businesses, companies and jobs by city and category. Browsing is free; listings from PKR 99.",
  metadataBase: new URL('https://www.paklistings.com'),
  keywords: [
    'business directory Pakistan',
    'businesses in Pakistan',
    'yellow pages Pakistan',
    'list of companies in Pakistan',
    'companies in Pakistan',
    'local services Pakistan',
    'jobs in Pakistan',
    'PakListings'
  ],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: "PakListings – Pakistan Business Directory & Yellow Pages",
    description: "PakListings — Pakistan business directory and yellow pages. Find businesses, companies and jobs by city and category. Browsing is free; listings from PKR 99.",
    url: 'https://www.paklistings.com/',
    siteName: 'PakListings',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PakListings – Pakistan Business Directory & Yellow Pages",
    description: "PakListings — Pakistan business directory and yellow pages. Find businesses, companies and jobs by city and category. Browsing is free; listings from PKR 99.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PakListings',
    url: 'https://www.paklistings.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.paklistings.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  // Canonical Organization + founder Person nodes live in
  // lib/organization-schema.ts so every page references one entity.

  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, founderPersonSchema, websiteSchema]) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAFA] text-[#09090B] pb-16 md:pb-0 min-h-screen selection:bg-cyan-700 selection:text-white">
        {children}
        <ClientProviders />
        <AnalyticsConsent />
      </body>
    </html>
  )
}

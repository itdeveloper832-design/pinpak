import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/client-providers'
import AnalyticsConsent from '@/components/analytics-consent'
import { founderPersonSchema, organizationSchema } from '@/lib/organization-schema'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

// Analytics wiring is consent-gated, not just env-gated: Google Analytics
// loads only after the visitor accepts analytics in the cookie banner (see
// components/analytics-consent.tsx), and Vercel Analytics only after the
// same consent (see components/client-providers.tsx). Nothing analytics
// loads on a first visit before consent. Microsoft Clarity is not used at
// all — it has no consent hook, so its script was removed. The verification
// meta tags below stay env-gated: they render only when the owner sets
// PakPin's own IDs.
const siteVerification: { google?: string; other?: Record<string, string> } = {}
// PakPin's own Google Search Console verification (owner-supplied 2026-10-29).
// Env var wins when set; otherwise this fallback guarantees the tag renders.
siteVerification.google =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  'vow0IR_605uY_PGLRr5zcCivk_N1dp40r3WmvNFxmL8'
if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
  siteVerification.other = { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
}

export const metadata: Metadata = {
  title: "PakPin – Pakistan's Free Business Directory: Find & List Local Businesses",
  description: "PakPin is Pakistan's free business directory. Find local businesses by city & category — or add your business listing free and get a public profile page that search engines can read.",
  metadataBase: new URL('https://www.geotaggingphotos.com'),
  keywords: [
    'business directory Pakistan',
    'businesses in Pakistan',
    'list business free',
    'companies in Pakistan',
    'local services Pakistan',
    'free business listing Pakistan',
    'PakPin'
  ],
  icons: {
    icon: [{ url: '/favicon.png', sizes: 'any' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: "PakPin – Pakistan's Free Business Directory: Find & List Local Businesses",
    description: "PakPin is Pakistan's free business directory. Find local businesses by city & category — or add your business listing free and get a public profile page that search engines can read.",
    url: 'https://www.geotaggingphotos.com/',
    siteName: 'PakPin',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PakPin – Pakistan's Free Business Directory: Find & List Local Businesses",
    description: "PakPin is Pakistan's free business directory. Find local businesses by city & category — or add your business listing free and get a public profile page that search engines can read.",
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(Object.keys(siteVerification).length > 0 ? { verification: siteVerification } : {}),
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PakPin',
    url: 'https://www.geotaggingphotos.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.geotaggingphotos.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  // Canonical Organization + founder Person nodes live in
  // lib/organization-schema.ts so every page references one entity.

  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="help" href="/llms.txt" type="text/plain" title="LLM Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, founderPersonSchema, websiteSchema]) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAFA] text-[#09090B] pb-16 md:pb-0 min-h-screen selection:bg-blue-700 selection:text-white">
        {children}
        <ClientProviders />
        <AnalyticsConsent />
      </body>
    </html>
  )
}

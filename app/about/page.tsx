import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Eye,
  FileText,
  Globe,
  Headphones,
  HeartHandshake,
  HelpCircle,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import {
  FOUNDER_LINKEDIN_URL,
  FOUNDER_PORTFOLIO_URL,
  PAKPIN_ORGANIZATION_ID,
} from '@/lib/organization-schema'

// Public, stack-free expertise list used only in structured data.
const FOUNDER_SCHEMA_KNOWS_ABOUT = [
  'Full-Stack Web Development',
  'Artificial Intelligence',
  'Technical SEO',
  'Local Search',
]

export function generateMetadata(): Metadata {
  const title = 'About PakPin – Founder & CEO Muhammad Imran | PakPin'
  const description =
    'Muhammad Imran built PakPin so Pakistan’s small businesses can be found online free — no listing fees, no paywalled phone numbers, just a public profile customers can call directly.'

  return {
    title,
    description,
    alternates: {
      canonical: 'https://www.geotaggingphotos.com/about',
    },
    openGraph: {
      title,
      description,
      url: 'https://www.geotaggingphotos.com/about',
      siteName: 'PakPin',
      locale: 'en_PK',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const STATS = [
  {
    value: '183',
    label: 'Cities Covered',
    detail: 'City pages across Pakistan',
    icon: MapPin,
  },
  {
    value: '24',
    label: 'Business Categories',
    detail: 'Organised for local discovery',
    icon: Building2,
  },
  {
    value: '100%',
    label: 'Free Listings',
    detail: 'No listing fee to get started',
    icon: BadgeCheck,
  },
  {
    value: '0',
    label: 'Rupees to List',
    detail: 'Contact details are not paywalled',
    icon: ShieldCheck,
  },
]

const FOUNDER_SKILLS = [
  'Full-Stack Web Architecture',
  'Modern Web Technologies',
  'JavaScript Backend Development',
  'Artificial Intelligence & Agentic AI',
  'Technical SEO & Core Web Vitals',
  'Generative Engine Optimization (GEO)',
  'Cloud Database Architecture',
  'Local Search Engineering',
  'High-Performance PWA Development',
  'REST & GraphQL API Design',
]

const CORE_VALUES = [
  {
    title: 'Fair One-Time Pricing',
    description:
      'A listing costs a small one-time fee from PKR 99 — no monthly charges, no renewals — and a customer never pays, in money or in personal data, to see a business’s phone or WhatsApp number.',
    icon: BadgeCheck,
  },
  {
    title: 'Customer & Community First',
    description:
      'Shopkeepers, startups, job seekers and ordinary customers all get the same simple thing: a direct line to the business they need.',
    icon: HeartHandshake,
  },
  {
    title: 'Radical Transparency',
    description:
      'No made-up numbers, no estimates dressed as facts. Listings come from the owners themselves, are reviewed, and are shown as they are.',
    icon: Eye,
  },
  {
    title: 'Continuous Technical Innovation',
    description:
      'Fast search, clean structure and pages built to be read properly by search engines keep business information easy to find and easy to use.',
    icon: Cpu,
  },
  {
    title: 'Nationwide Inclusive Growth',
    description:
      'A cottage artisan and a Karachi tech firm get the same shot at being found — size buys no advantage here.',
    icon: Users,
  },
  {
    title: 'Data Accuracy & E-E-A-T',
    description:
      'A directory is only as good as its details: numbers that ring, addresses that exist, and a WhatsApp button that reaches a human.',
    icon: ShieldCheck,
  },
]

const FUTURE_GOALS = [
  {
    title: 'Grow reviewed listings city by city',
    description:
      'Grow the reviewed listing base across Pakistan one city and one trade at a time, instead of chasing empty page counts.',
    icon: MapPin,
  },
  {
    title: 'Launch Featured listings and the Verified badge',
    description:
      'Offer Featured placement and a Verified badge for businesses that want more visibility, granted through an open, documented review — never sold blind.',
    icon: BadgeCheck,
  },
  {
    title: 'Build Pakistan’s most trusted local review system',
    description:
      'Build reviews around real customer experiences with real moderation, so good businesses earn their visibility instead of buying it.',
    icon: Star,
  },
]

const TEAM_FUNCTIONS = [
  {
    name: 'Engineering & Product Team',
    role: 'Platform Engineering & Product',
    description:
      'The team behind search speed, the interface, and the systems that carry submissions from sign-up to moderated publication.',
    icon: Code2,
  },
  {
    name: 'Customer & Listing Support',
    role: 'Owner Support & Listing Help',
    description:
      'The people who answer owners’ questions on verification, profile changes and posting jobs free.',
    icon: Headphones,
  },
  {
    name: 'Content & SEO Strategy',
    role: 'Content, Taxonomy & Local SEO',
    description:
      'The function that keeps categories tidy, citations consistent and city guides genuinely useful instead of filler.',
    icon: FileText,
  },
]

const ABOUT_FAQS = [
  {
    question: 'Who is the founder of PakPin?',
    answer:
      'Muhammad Imran founded PakPin and runs it as CEO (geotaggingphotos.com). He is a Pakistani full-stack web and AI developer and technical SEO specialist, and the founder of Imran Digitals.',
  },
  {
    question: 'Who is the CEO of PakPin?',
    answer:
      'Muhammad Imran is PakPin’s CEO and its lead software architect — engineering, technical SEO and growth all sit with him.',
  },
  {
    question: 'When was PakPin founded, and what is its mission?',
    answer:
      'Muhammad Imran founded PakPin in 2026. Its mission is simple: affordable online visibility for Pakistan’s small and medium businesses — a small one-time listing fee, no monthly charges, no hidden fees anywhere.',
  },
  {
    question: 'What is Muhammad Imran’s official website?',
    answer:
      'Muhammad Imran’s official website and portfolio is https://www.imrandigitals.com/. His LinkedIn profile is https://www.linkedin.com/in/muhammad-imran-972364373/.',
  },
  {
    question: 'What is the relationship between PakPin and Imran Digitals?',
    answer:
      'PakPin is Muhammad Imran’s own venture, designed and engineered by him. Imran Digitals is his separate digital agency and engineering consultancy — custom web apps, SaaS architecture, AI automation and technical SEO.',
  },
  {
    question: 'What technology is PakPin built on?',
    answer:
      'PakPin is a fast, mobile-first platform built for local search, with structured data that describes the site and its listings clearly to search engines and AI assistants.',
  },
  {
    question: 'How can I contact PakPin?',
    answer:
      'You can reach PakPin on its helpline +92 334 563 6230, or by email at admin@geotaggingphotos.com or support@geotaggingphotos.com. PakPin is an online service, available 24/7, and its office is at Office 303, Evacuee Trust Complex, F-5/1, Islamabad 44000, Pakistan. Full contact details are on the Contact page.',
  },
  {
    question: 'When will my approved listing go live?',
    answer:
      'Approved listings go public immediately once approved. Once your listing passes review and is approved, it appears on the site right away, so every new listing gets a fair, organised launch.',
  },
]

export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.geotaggingphotos.com/about/#webpage',
        url: 'https://www.geotaggingphotos.com/about',
        name: 'About PakPin – Founder & CEO Muhammad Imran',
        about: { '@id': PAKPIN_ORGANIZATION_ID },
        mainEntity: { '@id': 'https://www.geotaggingphotos.com/about/#muhammad-imran' },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.geotaggingphotos.com/about/#muhammad-imran',
        name: 'Muhammad Imran',
        jobTitle: 'Founder, Owner & CEO',
        description:
          'Muhammad Imran is the Founder, Owner and CEO of PakPin, a Pakistani full-stack web and AI developer, software architect and technical SEO specialist, and the founder of Imran Digitals.',
        url: FOUNDER_PORTFOLIO_URL,
        sameAs: [FOUNDER_PORTFOLIO_URL, FOUNDER_LINKEDIN_URL],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Multan',
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        worksFor: { '@id': PAKPIN_ORGANIZATION_ID },
        founderOf: [
          { '@id': PAKPIN_ORGANIZATION_ID },
          {
            '@type': 'Organization',
            name: 'Imran Digitals',
            url: FOUNDER_PORTFOLIO_URL,
          },
        ],
        knowsAbout: FOUNDER_SCHEMA_KNOWS_ABOUT,
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.geotaggingphotos.com/about/#faq',
        mainEntity: ABOUT_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.geotaggingphotos.com/about/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.geotaggingphotos.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: 'https://www.geotaggingphotos.com/about',
          },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0F172A] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </li>
                <li aria-current="page" className="text-white">
                  About
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
                <Sparkles className="h-4 w-4" />
                Founded by Muhammad Imran
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                About PakPin
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                PakPin is an open business directory for Pakistan, started in 2026 by{' '}
                <strong className="font-semibold text-white">Muhammad Imran</strong>, Founder of{' '}
                <a
                  href={FOUNDER_PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-300 underline decoration-blue-300/50 underline-offset-4 transition-colors hover:text-blue-200"
                >
                  Imran Digitals
                </a>
                . It gives local businesses affordable listings across 183 city pages in Pakistan — and
                keeps every phone and WhatsApp number in the open, never locked behind a paywall or a login.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#founder"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-blue-500"
                >
                  Meet the Founder
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/businesses"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Explore Businesses
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Honest platform stats */}
        <section aria-label="PakPin platform facts" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <article
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-4xl font-extrabold tracking-tight text-slate-900">
                        {stat.value}
                      </p>
                      <h2 className="mt-2 text-sm font-bold text-slate-900">{stat.label}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500">{stat.detail}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Founder spotlight */}
        <section id="founder" className="scroll-mt-24 px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Founder Spotlight
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Muhammad Imran — Founder, Owner & CEO
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                PakPin is run by the developer who built it — shaped by day-to-day work with
                Pakistan’s local businesses, and by a simple belief: a customer should never have
                to pay, or sign up, just to see a shop’s phone number.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-[0.82fr_1.55fr]">
                {/* Founder profile card */}
                <aside className="border-b border-slate-200 bg-slate-50 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                  <div className="relative mx-auto w-fit lg:mx-0">
                    <div
                      aria-hidden="true"
                      className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 via-blue-800 to-blue-500 text-5xl font-extrabold tracking-tight text-white shadow-xl shadow-blue-700/20 ring-8 ring-white"
                    >
                      MI
                    </div>
                    <span className="absolute -bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-700 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Founder
                    </span>
                  </div>

                  <div className="mt-9 text-center lg:text-left">
                    <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                      Muhammad Imran
                    </h3>
                    <p className="mt-2 font-bold text-blue-800">
                      Founder & Chief Executive Officer (CEO)
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      Founder, owner and lead software architect of PakPin
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <MapPin className="h-4 w-4 text-blue-700" />
                      Multan & Lahore, Punjab, Pakistan
                    </p>
                  </div>

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Key Ventures
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm font-semibold text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700" />
                        Founder & CEO @ PakPin
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700" />
                        Founder @ Imran Digitals
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <a
                      href={FOUNDER_PORTFOLIO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-800"
                    >
                      <Globe className="h-4 w-4" />
                      Visit Portfolio
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={FOUNDER_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-800"
                    >
                      <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                      LinkedIn
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </aside>

                {/* Founder biography */}
                <div className="p-7 sm:p-9 lg:p-11">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
                    <Sparkles className="h-4 w-4" />
                    The Visionary Behind PakPin
                  </span>

                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    Building free digital visibility for local Pakistan
                  </h3>

                  <div className="mt-6 space-y-5 leading-relaxed text-slate-600">
                    <p>
                      <strong className="font-semibold text-slate-900">Muhammad Imran</strong> is a
                      Pakistani full-stack web & AI developer, software architect and technical SEO
                      specialist. As the founder of{' '}
                      <a
                        href={FOUNDER_PORTFOLIO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
                      >
                        Imran Digitals
                      </a>
                      , he works across custom web applications, SaaS architecture, AI automation and
                      technical SEO.
                    </p>
                    <p>
                      Working with local businesses through Imran Digitals, he kept meeting the same
                      problem: a dukaan in Multan, a clinic in Lahore, a workshop in Gujranwala —
                      all effectively invisible online. The older directories either charged
                      Rs. 5,000 to Rs. 50,000 a year just to show a phone number, or they hid
                      contact details behind a login wall.
                    </p>
                    <p>
                      PakPin is his answer to that: an affordable directory, where any
                      business can register, pass a review, and be found for a small one-time fee — a fraction of what older directories charged per year.
                      The goal is deliberately practical — a customer finds the right local business
                      and reaches it directly, in minutes.
                    </p>
                  </div>

                  <div className="mt-9 border-t border-slate-200 pt-8">
                    <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                      <Cpu className="h-5 w-5 text-blue-700" />
                      Founder’s Core Engineering & SEO Competencies
                    </h4>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Muhammad Imran skills">
                      {FOUNDER_SKILLS.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-800" />
                    <p className="text-sm leading-relaxed text-blue-950">
                      <strong className="font-bold">Founder fact:</strong> Muhammad Imran is the
                      founder, owner and CEO of PakPin and the founder of Imran Digitals, his
                      digital agency and engineering consultancy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and vision */}
        <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Purpose
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  To take cost out of being found online: an affordable, reviewed directory
                  covering 183 city pages, so no Pakistani entrepreneur needs a big budget to be visible.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-slate-900">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  A Pakistan where any customer can pull up a genuine phone number, address and
                  WhatsApp line for any dukaan, clinic, company or service — and trust that it works.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              How We Work
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Core Values
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              These principles shape how PakPin is engineered, reviewed and improved — and how we
              communicate what the platform does and does not claim.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon
              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                </article>
              )
            })}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-slate-500">
            Read more about our standards in the{' '}
            <Link href="/editorial-policy" className="font-bold text-blue-800 hover:text-blue-900">
              Editorial Policy
            </Link>{' '}
            and{' '}
            <Link href="/verification-policy" className="font-bold text-blue-800 hover:text-blue-900">
              Verification Policy
            </Link>
            .
          </p>
        </section>

        {/* Our story */}
        <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                How Muhammad Imran Built PakPin
              </h2>

              <div className="mt-7 space-y-5 leading-relaxed text-slate-600">
                <p>
                  While working with dozens of local enterprises through Imran Digitals, Muhammad Imran
                  kept hearing the same problem. Businesses were serving their neighbourhoods every
                  day, but customers searching online often could not find a reliable page, phone
                  number or WhatsApp contact for them.
                </p>
                <p>
                  The issue was not a lack of quality businesses. It was a lack of accessible digital
                  infrastructure built for Pakistan’s local markets. Existing options could be
                  expensive, restrictive or simply not designed around how customers here search for
                  a shop, clinic, company or service.
                </p>
                <p>
                  PakPin was founded in 2026 as the answer. It was engineered from the ground up
                  with modern web technologies and secure cloud infrastructure, organised around cities and categories, and built
                  with a review step, after which approved listings go public immediately. Customers can discover a business and
                  reach it through direct phone and WhatsApp details; owners can create visibility
                  without paying to reveal their own contact information.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Founded
                  </p>
                  <p className="mt-2 font-extrabold text-slate-900">2026</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Founder
                  </p>
                  <p className="mt-2 font-extrabold text-slate-900">Muhammad Imran</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Listing Model
                  </p>
                  <p className="mt-2 font-extrabold text-slate-900">Free & Reviewed</p>
                </div>
              </div>
            </div>

            <figure className="rounded-3xl bg-[#0F172A] p-8 text-white shadow-sm sm:p-10">
              <Quote className="h-10 w-10 text-blue-400" />
              <blockquote className="mt-6 text-2xl font-bold leading-snug tracking-tight">
                “What if every Pakistani dukandar, trader, and service provider could get listed online
                for free, forever, with zero hidden charges?”
              </blockquote>
              <figcaption className="mt-7 border-t border-slate-700 pt-6">
                <p className="font-bold text-white">Muhammad Imran</p>
                <p className="mt-1 text-sm text-slate-300">
                  The founding question behind PakPin
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Where we are headed */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Looking Ahead
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Where We’re Headed
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                These are future goals for PakPin — the work we are building toward as the directory
                grows responsibly.
              </p>
            </div>
            <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
              Future Goals
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {FUTURE_GOALS.map((goal) => {
              const Icon = goal.icon
              return (
                <article
                  key={goal.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-slate-900">
                    {goal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{goal.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        {/* People and functions behind PakPin */}
        <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                People & Expertise
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The People Behind PakPin
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                PakPin is powered by Muhammad Imran and the specialist functions at Imran Digitals
                that support its engineering, customer experience and local search strategy.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <article className="rounded-3xl border border-blue-200 bg-blue-50/60 p-7 shadow-sm">
                <div
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-extrabold text-white"
                >
                  MI
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">Muhammad Imran</h3>
                <p className="mt-1 text-sm font-bold text-blue-800">
                  Founder, Owner & CEO
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Responsible for the platform vision, software architecture, web development, AI
                  integration and local SEO strategy.
                </p>
                <div className="mt-5 flex gap-4 border-t border-blue-100 pt-4 text-sm font-bold">
                  <a
                    href={FOUNDER_PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-800 hover:text-blue-950"
                  >
                    Portfolio
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={FOUNDER_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-800"
                  >
                    LinkedIn
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>

              {TEAM_FUNCTIONS.map((team) => {
                const Icon = team.icon
                return (
                  <article
                    key={team.name}
                    className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold leading-snug text-slate-900">
                      {team.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-blue-800">{team.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {team.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Founder FAQs */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800">
              <HelpCircle className="h-4 w-4" />
              About PakPin FAQs
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Questions About PakPin & Its Founder
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
              Clear answers about who founded PakPin, who leads it, how it relates to Imran
              Digitals, how to contact us and when approved listings go live.
            </p>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQS.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-extrabold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-blue-700 transition-transform group-open:rotate-90" />
                </summary>
                <p className="border-t border-slate-100 px-6 pb-6 pt-4 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact PakPin */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Contact PakPin
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              PakPin is an online service, available 24/7. Reach the team on the helpline, by
              email, or through the Contact page.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">Helpline</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <a
                  href="tel:+923345636230"
                  className="font-bold text-blue-800 hover:text-blue-900"
                >
                  +92 334 563 6230
                </a>
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">Email</h3>
              <p className="mt-3 space-y-1 text-sm leading-relaxed text-slate-600">
                <a
                  href="mailto:admin@geotaggingphotos.com"
                  className="block font-bold text-blue-800 hover:text-blue-900"
                >
                  admin@geotaggingphotos.com
                </a>
                <a
                  href="mailto:support@geotaggingphotos.com"
                  className="block font-bold text-blue-800 hover:text-blue-900"
                >
                  support@geotaggingphotos.com
                </a>
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-slate-900">Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Office 303, Evacuee Trust Complex, F-5/1, Islamabad 44000, Pakistan
              </p>
            </article>
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
            >
              Visit the Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-14 text-center text-white shadow-sm sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-700/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Add Your Business to PakPin
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
                Join Pakistani business owners getting affordable online discoverability.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                >
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/add-business"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                >
                  Add Your Business
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

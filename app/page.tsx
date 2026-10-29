import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  Search, MapPin, ChevronRight, ArrowRight, ShieldCheck, Globe,
  BookOpen, Sparkles, LayoutGrid, Compass, Building2, MessageCircle, ListChecks
} from 'lucide-react'
import { CATEGORIES, CITIES, TOP_CITIES } from '@/lib/data'
import ListBusinessCta from '@/components/list-business-cta'
import { BLOG_POSTS } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: "Find Local Businesses Across Pakistan | PakPin",
  description: "Search Pakistani businesses by city and trade, see their phone and WhatsApp numbers in the open, and contact them directly — or list your own business free with a public profile page.",
  alternates: {
    canonical: 'https://www.geotaggingphotos.com/',
  },
  openGraph: {
    title: "Find Local Businesses Across Pakistan | PakPin",
    description: "Search Pakistani businesses by city and trade, see their phone and WhatsApp numbers in the open, and contact them directly — or list your own business free with a public profile page.",
    url: 'https://www.geotaggingphotos.com/',
    siteName: 'PakPin',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Find Local Businesses Across Pakistan | PakPin",
    description: "Search Pakistani businesses by city and trade, see their phone and WhatsApp numbers in the open, and contact them directly — or list your own business free with a public profile page.",
  },
}

const FAQS = [
  {
    question: 'What is PakPin?',
    answer: 'PakPin is Pakistan’s open business directory. Businesses and services are organised by city and trade, with guides that help you compare providers — and every owner gets a public profile page that customers can call or WhatsApp directly.'
  },
  {
    question: 'Is PakPin free to use?',
    answer: 'Yes — browsing, reading the city and category guides, and searching are all free, and you never need an account to contact a business.'
  },
  {
    question: 'Which cities and categories does PakPin cover?',
    answer: 'PakPin covers cities across Pakistan — Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar and many more — across trades from restaurants and real estate to technology, healthcare and home services.'
  },
  {
    question: 'I run a business. How can I get listed?',
    answer: 'Open a free account and complete the Add Business form — eight short steps for your contact details, category, city, hours, services and products. Our team reviews each submission; once approved, it goes live immediately and shows up on your city page, your category page and in search.'
  }
]

function cityToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export default function HomePage() {
  const latestPosts = Object.values(BLOG_POSTS)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main id="main-content">
        {/* HERO */}
        <section className="bg-slate-50 text-slate-900 pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto space-y-8 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 border border-blue-200 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span>Pakistan's Local Business Directory</span>
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Local Businesses & Services Across <span className="text-blue-800">Pakistan</span>, In One Place
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                Search by city and trade, compare providers with our guides, and call or WhatsApp the business directly — no account, no paywall, no middleman.
              </p>
            </div>

            {/* Hero Search Box */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-3 sm:p-4 shadow-xl shadow-slate-900/5 border border-slate-200/90 text-left">
              <form action="/search" method="GET" className="grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-6 flex items-center gap-3 px-4 py-3 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                  <Search className="w-5 h-5 text-slate-400 shrink-0" />
                  <label htmlFor="hero-search-q" className="sr-only">Search businesses, categories or guides</label>
                  <input
                    id="hero-search-q"
                    type="text"
                    name="q"
                    placeholder="Try restaurants, real estate, software houses..."
                    className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
                  />
                </div>

                <div className="md:col-span-4 flex items-center gap-3 px-4 py-3 bg-slate-50/80 rounded-2xl border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <label htmlFor="hero-city-select" className="sr-only">Select City</label>
                  <select
                    id="hero-city-select"
                    name="city"
                    className="w-full bg-transparent text-slate-900 text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="">All Cities in Pakistan</option>
                    {CITIES.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    aria-label="Search PakPin Directory"
                    className="w-full h-full py-3.5 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </div>
              </form>

              <div className="pt-3 px-2 flex items-center gap-2 flex-wrap text-xs text-slate-500">
                <span className="font-bold text-slate-400">Popular:</span>
                <Link href="/category/restaurants" className="hover:text-blue-700 font-semibold">Restaurants</Link>
                <span>•</span>
                <Link href="/category/real-estate" className="hover:text-blue-700 font-semibold">Real Estate</Link>
                <span>•</span>
                <Link href="/category/technology" className="hover:text-blue-700 font-semibold">Software Houses</Link>
                <span>•</span>
                <Link href="/category/healthcare" className="hover:text-blue-700 font-semibold">Healthcare</Link>
                <span>•</span>
                <Link href="/blog" className="hover:text-blue-700 font-bold">Business Guides &rarr;</Link>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  <strong className="text-slate-900">Own a business?</strong> Get a free profile page and let customers find you.
                </p>
                <div className="flex items-center gap-2.5 shrink-0">
                  <Link
                    href="/add-business" prefetch={false}
                    className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-colors"
                  >
                    Add Your Business — Free
                  </Link>
                  <Link
                    href="/register" prefetch={false}
                    className="px-5 py-2.5 bg-white border border-slate-200 hover:border-blue-500 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                  >
                    Create Free Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-3xl font-extrabold text-slate-900">From PKR 99</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">One-time listing fee, no monthly charges</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-3xl font-extrabold text-blue-700">Every major city</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Karachi · Lahore · Islamabad & more</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-3xl font-extrabold text-blue-700">24 categories</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Food, tech, health, home services & more</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-3xl font-extrabold text-rose-500">Local guides</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Compare before you commit</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Browse by Industry</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Start With the Trade You Need
              </h2>
            </div>
            <Link href="/categories" className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1">
              <span>View All 24 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.slice(0, 12).map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all text-center space-y-2 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mx-auto group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-xs line-clamp-1 group-hover:text-blue-700">
                  {cat.name}
                </h3>
                <p className="text-[11px] font-semibold text-blue-700">
                  Explore guide
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CITIES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-900 text-white rounded-3xl my-8">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Near You</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Your City, Its Businesses
                </h2>
                <p className="text-xs text-slate-400 mt-1">Choose your city and see its trades, guides and listed businesses.</p>
              </div>
              <Link href="/cities" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                <span>Explore All Cities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 text-xs">
              {CITIES.map((city) => (
                <Link
                  key={city}
                  href={`/city/${cityToSlug(city)}`}
                  className="p-3.5 bg-slate-800/80 hover:bg-blue-700 rounded-xl border border-slate-700 text-slate-200 hover:text-white transition-all flex items-center justify-between font-semibold group"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 group-hover:text-white" />
                    <span>{city}</span>
                  </div>
                  <ChevronRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY PAKPIN */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Why PakPin</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Built Around How People Actually Search
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">One free platform that starts from the way people really look: a service, in a place, near them — then gives them the number to call.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <Compass className="w-8 h-8 text-blue-700" />
                <h3 className="font-bold text-slate-900 text-base">Made for Local Search</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Everything is organised by city and trade, the way people actually search: a service, in a place, near them — not a wall of unsorted names.</p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <BookOpen className="w-8 h-8 text-blue-700" />
                <h3 className="font-bold text-slate-900 text-base">Guides, Not Just Lists</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Every city and trade comes with a practical guide: what to look for, what to ask, and how to compare providers before you spend a rupee.</p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <ShieldCheck className="w-8 h-8 text-rose-600" />
                <h3 className="font-bold text-slate-900 text-base">Honest by Design</h3>
                <p className="text-xs text-slate-600 leading-relaxed">No bought rankings, no paid placements dressed as recommendations, no invented numbers. What you read is what we actually know.</p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/80 space-y-3">
                <Globe className="w-8 h-8 text-purple-600" />
                <h3 className="font-bold text-slate-900 text-base">Pages Search Engines Understand</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Fast pages with structured data behind them, so a listed business gets a profile page that search engines — and customers — can read properly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOR BUSINESS OWNERS */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">For Business Owners</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Your Business Found — Free
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Register in minutes and complete the eight-step Add Business form. Once approved, your listing goes live immediately — on your city page, your category page and in search.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <Building2 className="w-8 h-8 text-blue-700" />
              <h3 className="font-bold text-slate-900 text-base">Your Own Profile Page</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Your own page with your name, description, address and contact details — written so customers and search engines both understand it.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <Search className="w-8 h-8 text-blue-700" />
              <h3 className="font-bold text-slate-900 text-base">Found in Category, City & Search</h3>
              <p className="text-xs text-slate-600 leading-relaxed">An approved listing shows up in three places customers actually look: its category page, its city page and PakPin search.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <MessageCircle className="w-8 h-8 text-blue-700" />
              <h3 className="font-bold text-slate-900 text-base">Calls & WhatsApp, Directly to You</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Call and WhatsApp buttons sit right on your profile, so customers reach you directly — no middleman, no commission on enquiries.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <ListChecks className="w-8 h-8 text-rose-600" />
              <h3 className="font-bold text-slate-900 text-base">Hours, Services & Products</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Put your opening hours, services and main products on the profile, so customers know exactly what you do before they pick up the phone.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center flex-wrap">
            <Link
              href="/register" prefetch={false}
              className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-700/20 transition-all"
            >
              Create Free Account
            </Link>
            <Link
              href="/add-business" prefetch={false}
              className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-2xl transition-all"
            >
              Add Your Business
            </Link>
          </div>
        </section>

        {/* BLOG / GUIDES */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Guides & Insights</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Latest Guides From the PakPin Blog
              </h2>
            </div>
            <Link href="/blog" className="text-xs font-bold text-blue-700 hover:underline">
              Explore Blog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3 hover:border-blue-500 transition-colors">
                <span className="text-[11px] font-bold text-blue-700">{post.category}</span>
                <h3 className="font-bold text-slate-900 text-sm">{post.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt}</p>
                <p className="text-[11px] text-slate-400 pt-1">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Answers about searching, listing and contacting businesses on PakPin.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIRECTORY CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto space-y-6">
            <Building2 className="w-10 h-10 text-blue-400 mx-auto" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Browse the Directory — or List Your Business on It
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Look through businesses by category and city — or list your own business free in a few minutes, with a profile page customers can call or WhatsApp straight away.
            </p>
            <div className="flex items-center gap-3 justify-center flex-wrap">
              <Link
                href="/categories"
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Browse Categories
              </Link>
              <Link
                href="/add-business" prefetch={false}
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition-colors"
              >
                List Your Business Free
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS + VERIFICATION */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How a Listing Gets on PakPin — and Stays Honest
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              No profile appears here by accident. Every listing is submitted by the business itself and checked by our team before it goes public.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white rounded-3xl border border-slate-200 p-7 space-y-3">
              <ListChecks className="w-8 h-8 text-blue-700" />
              <h3 className="font-extrabold text-slate-900">1. The owner submits</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The owner opens a free account and fills in the eight-step form: contact details, category, city, hours, services and products.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 p-7 space-y-3">
              <ShieldCheck className="w-8 h-8 text-blue-700" />
              <h3 className="font-extrabold text-slate-900">2. Our team reviews</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Before approving, we check the essentials: a genuine business name, a working phone number, and the right category and city. Spam and duplicates get rejected.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 p-7 space-y-3">
              <MessageCircle className="w-8 h-8 text-blue-700" />
              <h3 className="font-extrabold text-slate-900">3. Customers connect directly</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Approved profiles go live in their category, city and search. Customers call or WhatsApp the business directly — we take no commission and never sit in between.
              </p>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500">
            Read the full standards in our{' '}
            <Link href="/verification-policy" className="text-blue-700 font-semibold hover:underline">verification policy</Link>{' '}
            and{' '}
            <Link href="/editorial-policy" className="text-blue-700 font-semibold hover:underline">editorial policy</Link>,
            or report a problem listing via{' '}
            <Link href="/report-abuse" className="text-blue-700 font-semibold hover:underline">Report Abuse</Link>.
          </p>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Customers Are Searching Right Now. Be Findable.
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                Open a free account and add your business in eight short steps. Once approved, it goes live immediately — in your category, your city and search.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center shrink-0">
              <Link
                href="/add-business" prefetch={false}
                className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-sm rounded-2xl shadow-xl transition-all flex items-center gap-2"
              >
                <span>Add Your Business — Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/register" prefetch={false}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm rounded-2xl transition-all"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ListBusinessCta />
    </div>
  )
}

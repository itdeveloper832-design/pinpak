import React, { cache } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import OwnerCtaBand from '@/components/owner-cta-band'
import ListBusinessCta from '@/components/list-business-cta'
import { CITIES, CATEGORIES } from '@/lib/data'
import { CITY_INFO, generateCityContent } from '@/lib/seo-content'
import { getCitySeoCopy } from '@/lib/seo-directory-content'
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema'
import MarkdownContent from '@/components/seo/markdown-content'
import { getCityCards } from '@/lib/public-listings'
import { MapPin, Building2, Phone, ArrowRight } from 'lucide-react'

export const revalidate = 3600

// Shared between generateMetadata and the page component so the
// merged city listings are fetched once per render, not twice.
const getCachedCityCards = cache((city: string, citySlug: string) => getCityCards(city, citySlug))

function cityTitle(city: string): string {
  return city.length <= 12
    ? `Businesses in ${city} – Find Contacts & Services | PakPin`
    : `${city} Businesses: Contacts & Services | PakPin`
}

function cityDescription(city: string, province: string | undefined): string {
  if (province) {
    const base = `Browse ${city} businesses in ${province} — compare options, check contact details and call or WhatsApp providers directly on PakPin.`
    return base.length < 140
      ? `Browse ${city} businesses in ${province} — compare options and services, check contact details and call or WhatsApp providers directly on PakPin.`
      : base
  }
  const base = `Browse businesses and services in ${city}, Pakistan — compare local options, check contact details and call or WhatsApp providers directly.`
  return base.length < 140
    ? `Browse businesses and services in ${city}, Pakistan — compare local options and services, check contact details and call or WhatsApp providers directly.`
    : base
}

function slugify(value: string): string {
  return (value || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function cityToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}

function resolveCity(slug: string): string | null {
  return CITIES.find(c => cityToSlug(c) === slug.toLowerCase()) || null
}

export function generateStaticParams() {
  return CITIES.map(city => ({ slug: cityToSlug(city) }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const city = resolveCity(params.slug)
  if (!city) {
    return { title: 'City Not Found | PakPin', robots: { index: false, follow: false } }
  }
  const info = CITY_INFO[city]
  const title = cityTitle(city)
  const description = cityDescription(city, info?.province)
  const cards = await getCachedCityCards(city, cityToSlug(city))
  const canonical = `https://www.geotaggingphotos.com/city/${cityToSlug(city)}/`
  return {
    title,
    description,
    ...(cards.length === 0 ? { robots: { index: false, follow: false } } : {}),
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: 'PakPin', locale: 'en_PK', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function CityPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const city = resolveCity(params.slug)
  if (!city) notFound()

  const slug = cityToSlug(city)
  const listings = await getCachedCityCards(city, slug)
  const info = CITY_INFO[city]
  const copy = getCitySeoCopy(slug)
  const guide = generateCityContent(city)
  const otherCities = CITIES.filter(c => c !== city).slice(0, 12)
  const provinceCities = info?.province
    ? CITIES.filter(c => c !== city && CITY_INFO[c]?.province === info.province).slice(0, 8)
    : []

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Navbar />
      <BreadcrumbSchema pathname={`/city/${slug}`} />

      <main id="main-content" className="flex-1">
        {/* Hero */}
        <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
              <MapPin className="w-3.5 h-3.5" />
              {info ? `${info.province}, Pakistan` : 'Pakistan'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Businesses in <span className="text-blue-400">{city}</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {copy?.intro || (info
                ? `${city} is ${info.description}. Use this guide to explore the city's main business sectors and browse services by category.`
                : `Explore the main business sectors of ${city} and browse local services by category on PakPin.`)}
            </p>
            {info?.districts && (
              <p className="text-xs text-slate-400">
                Popular areas: {info.districts.join(' · ')}
              </p>
            )}
          </div>
        </section>

        {/* Categories in this city */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Browse Categories in {city}
            </h2>
            <Link href="/categories" className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 shrink-0">
              <span>All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map(cat => {
              const count = listings.filter(biz => biz.category === cat.name || slugify(biz.category) === cat.id || slugify(biz.category) === slugify(cat.name)).length
              return (
                <Link
                  key={cat.id}
                  href={`/city/${slug}/${cat.id}`}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <Building2 className="w-6 h-6 text-blue-700 mb-2" />
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700">{cat.name} in {city}</h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{cat.desc}</p>
                  <p className="text-[11px] font-bold text-blue-800 mt-2">
                    {count === 0 ? 'No listings yet' : count === 1 ? '1 listing' : `${count} listings`}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Businesses in this city */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Businesses in {city}
          </h2>
          {listings.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center space-y-4">
              <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="font-extrabold text-slate-900 text-lg">
                No businesses listed in {city} yet — be the first
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                This page is ready for its first {city} listing. If you run a business here,
                add it free and, once approved, your profile will appear here immediately.
              </p>
              <Link
                href="/add-business"
                prefetch={false}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors"
              >
                Add Your Business — Free <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {listings.map(biz => (
                <article key={biz.id} className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-extrabold text-slate-900 leading-snug">{biz.name}</h3>
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100 text-[11px] font-bold">
                      {biz.category}
                    </span>
                  </div>
                  {biz.city && (
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-blue-700" /> {biz.city}
                    </p>
                  )}
                  {biz.phone && (
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <Phone className="w-3.5 h-3.5 text-blue-700" /> {biz.phone}
                    </p>
                  )}
                  {biz.description && (
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{biz.description}</p>
                  )}
                  <Link
                    href={`/business/${biz.slug}`}
                    prefetch={false}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800"
                  >
                    View Business <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* City guide */}
        <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto">
            <MarkdownContent content={guide} />
            {copy?.guidance && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6">{copy.guidance}</p>
            )}
          </div>
        </section>

        {/* Other cities */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Explore Other Cities</h2>
          <div className="flex flex-wrap gap-2.5">
            {otherCities.map(c => (
              <Link
                key={c}
                href={`/city/${cityToSlug(c)}`}
                className="px-3.5 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-500 text-xs font-medium"
              >
                Businesses in {c}
              </Link>
            ))}
            <Link href="/cities" className="px-3.5 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-800 text-xs font-bold">
              View All Cities
            </Link>
          </div>
          {provinceCities.length > 0 && info && (
            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-slate-900 text-sm">More Cities in {info.province}</h3>
              <div className="flex flex-wrap gap-2.5">
                {provinceCities.map(c => (
                  <Link
                    key={c}
                    href={`/city/${cityToSlug(c)}`}
                    className="px-3.5 py-2 bg-white border border-slate-200 rounded-xl hover:border-blue-500 text-xs font-medium"
                  >
                    Businesses in {c}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <OwnerCtaBand
          title={`Run a business in ${city}? Get listed free.`}
          text={`Join the ${city} directory: create a free account, complete the eight-step form, and once approved, your profile goes live immediately, and then appears on this page, in your category and in search.`}
          links={[
            { label: `All businesses in ${city}`, href: '/businesses' },
            { label: 'Browse categories', href: '/categories' },
            { label: 'Listing guidelines', href: '/business-listing-guidelines' },
            { label: 'All cities', href: '/cities' },
          ]}
        />
      </main>

      <Footer />
      <ListBusinessCta />
    </div>
  )
}

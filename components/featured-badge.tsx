/**
 * "Featured" badge for public listing cards — rendered only when a
 * listing's `featured` flag is set (Featured tier, admin-approved).
 * The badge is the visible half of the Featured tier; the other half
 * is featured-first sorting (sortFeaturedFirst in lib/public-listings).
 */
export default function FeaturedBadge() {
  return (
    <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">
      Featured
    </span>
  )
}

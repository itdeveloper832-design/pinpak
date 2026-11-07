import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PakListings — Pakistan's Digital Business & Enterprise Ecosystem",
    short_name: 'PakListings',
    description: "Discover, connect, and grow with Pakistan's digital business platform. Local businesses, job portal, and professional talent.",
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#0E7490',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

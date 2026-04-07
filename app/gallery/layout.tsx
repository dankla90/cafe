import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Le Café Pomme — pastries, coffee, and life at our Bergen café.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://lecafepomme.no/gallery',
    siteName: 'Le Café Pomme',
    title: 'Gallery | Le Café Pomme',
    description:
      'Photos from Le Café Pomme — pastries, coffee, and life at our Bergen café.',
    images: [
      {
        url: '/frontpage.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Café Pomme — French-inspired café in Bergen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Le Café Pomme',
    description:
      'Photos from Le Café Pomme — pastries, coffee, and life at our Bergen café.',
    images: ['/frontpage.jpg'],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

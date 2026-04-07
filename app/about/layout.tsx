import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Le Café Pomme — a French-inspired café and patisserie built from scratch in the heart of Bergen, Norway.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://lecafepomme.no/about',
    siteName: 'Le Café Pomme',
    title: 'About | Le Café Pomme',
    description:
      'The story of Le Café Pomme — a French-inspired café and patisserie built from scratch in the heart of Bergen, Norway.',
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
    title: 'About | Le Café Pomme',
    description:
      'The story of Le Café Pomme — a French-inspired café and patisserie built from scratch in the heart of Bergen, Norway.',
    images: ['/frontpage.jpg'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

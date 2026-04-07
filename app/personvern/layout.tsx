import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvern',
  description:
    'Personvernerklæring for Le Café Pomme — informasjon om hvordan vi behandler personopplysninger.',
  alternates: {
    canonical: '/personvern',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://lecafepomme.no/personvern',
    siteName: 'Le Café Pomme',
    title: 'Personvern | Le Café Pomme',
    description:
      'Personvernerklæring for Le Café Pomme — informasjon om hvordan vi behandler personopplysninger.',
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
    title: 'Personvern | Le Café Pomme',
    description:
      'Personvernerklæring for Le Café Pomme — informasjon om hvordan vi behandler personopplysninger.',
    images: ['/frontpage.jpg'],
  },
}

export default function PersonvernLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt Le Café Pomme — Nøstegaten 47, 5010 Bergen. Ring oss på +47 55 09 11 00 eller send e-post til bestilling.lecafepomme@gmail.com.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://lecafepomme.no/contact',
    siteName: 'Le Café Pomme',
    title: 'Kontakt | Le Café Pomme',
    description:
      'Kontakt Le Café Pomme — Nøstegaten 47, 5010 Bergen. Ring oss på +47 55 09 11 00 eller send e-post til bestilling.lecafepomme@gmail.com.',
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
    title: 'Kontakt | Le Café Pomme',
    description:
      'Kontakt Le Café Pomme — Nøstegaten 47, 5010 Bergen. Ring oss på +47 55 09 11 00 eller send e-post til bestilling.lecafepomme@gmail.com.',
    images: ['/frontpage.jpg'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

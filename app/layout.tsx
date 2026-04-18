import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Beau_Rivage, Gwendolyn } from 'next/font/google'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const beauRivage = Beau_Rivage({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-beau-rivage',
})

const gwendolyn = Gwendolyn({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-gwendolyn',
})

const bagnard = localFont({
  src: '../public/fonts/Bagnard.otf',
  variable: '--font-bagnard',
})

export const metadata: Metadata = {
  title: {
    default: 'Le Café Pomme',
    template: '%s | Le Café Pomme',
  },
  description:
    'Fransk-inspirert kafé og konditori i Bergen. Autentisk bakverk, fersk kaffe og croissanter på Nøstegaten 47. French-inspired café and patisserie in Bergen, Norway.',
  keywords: [
    'kafé Bergen', 'café Bergen', 'konditori Bergen', 'fransk kafé', 'French café Norway',
    'Le Café Pomme', 'Nøstegaten', 'croissant Bergen', 'patisserie Bergen',
    'kaffe Bergen', 'bakverk Bergen', 'fransk konditori', 'Bergen sentrum kafé',
  ],
  authors: [{ name: 'Le Café Pomme' }],
  metadataBase: new URL('https://lecafepomme.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://lecafepomme.no',
    siteName: 'Le Café Pomme',
    title: 'Le Café Pomme — Kafé & Konditori i Bergen',
    description:
      'Fransk-inspirert kafé og konditori i Bergen. Autentisk bakverk, fersk kaffe og croissanter på Nøstegaten 47.',
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
    title: 'Le Café Pomme — Kafé & Konditori i Bergen',
    description:
      'Fransk-inspirert kafé og konditori i Bergen. Autentisk bakverk, fersk kaffe og croissanter på Nøstegaten 47.',
    images: ['/frontpage.jpg'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Le Café Pomme',
  url: 'https://lecafepomme.no',
  telephone: '+4755091100',
  email: 'bestilling.lecafepomme@gmail.com',
  image: 'https://lecafepomme.no/frontpage.jpg',
  priceRange: '$$',
  servesCuisine: ['French', 'Patisserie', 'Coffee'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nøstegaten 47',
    addressLocality: 'Bergen',
    postalCode: '5010',
    addressCountry: 'NO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 60.392505,
    longitude: 5.312865,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/lecafe.no/',
    'https://www.facebook.com/profile.php?id=61553088848116',
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body className={`${beauRivage.variable} ${gwendolyn.variable} ${bagnard.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <StyledComponentsRegistry>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className={`${beauRivage.variable} ${gwendolyn.variable} ${bagnard.variable}`}>
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

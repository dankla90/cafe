import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontakt Le Café Pomme — Nøstegaten 47, 5010 Bergen. Ring oss på +47 55 09 11 00 eller send e-post til bestilling.lecafepomme@gmail.com.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personvern',
  description: 'Personvernerklæring for Le Café Pomme — informasjon om hvordan vi behandler personopplysninger.',
}

export default function PersonvernLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

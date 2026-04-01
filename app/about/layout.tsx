import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'The story of Le Café Pomme — a French-inspired café and patisserie built from scratch in the heart of Bergen, Norway.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

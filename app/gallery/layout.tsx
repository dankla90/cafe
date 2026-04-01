import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from Le Café Pomme — pastries, coffee, and life at our Bergen café.',
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

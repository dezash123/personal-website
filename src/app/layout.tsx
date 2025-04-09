import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Desmond Mehta',
  description: 'My personal website showcasing my portfolio and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-dark-900 text-light-300">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
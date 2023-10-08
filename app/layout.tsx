import Footer from '@/components/footer/footer'
import AuthContext from '@/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import ScrollToTop from '@/components/scrollToTop/scrollToTop'
import Providers from '@/lib/providers'

export const metadata: Metadata = {
  title: 'Banuddy',
  description: 'Generated by pair3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="font-display">
      <body suppressHydrationWarning={true}>
        <Providers>
          <AuthContext>
            <div>HEADER</div>
            {children}
            <ScrollToTop />
            <Footer />
          </AuthContext>
        </Providers>
      </body>
    </html>
  )
}

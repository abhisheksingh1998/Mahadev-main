import type {Metadata} from 'next'
import {Cinzel, Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'
import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {AOSProvider} from '@/components/AOSProvider'
import {WhatsAppFloat} from '@/components/WhatsAppFloat'
import {SiteSettingsProvider} from '@/components/SiteSettingsProvider'
import {getSiteSettings} from '@/lib/queries'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    title: settings.title || 'Mahadev Book',
    description: settings.description,
  }
}

export const revalidate = 60

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSiteSettings()

  return (
    <html lang="en" className={`${cinzel.variable} ${jakarta.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <SiteSettingsProvider settings={settings}>
          <AOSProvider>
            {children}
            <WhatsAppFloat />
          </AOSProvider>
        </SiteSettingsProvider>
      </body>
    </html>
  )
}

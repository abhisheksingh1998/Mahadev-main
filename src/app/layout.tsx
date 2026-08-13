import type {Metadata} from 'next'
import Script from 'next/script'
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

    verification: {
      google: 'CxZyiZUZSwTca_gtmrCTEVACSfrNQgva8xJ3PbcY6O0',
    },

    icons: {
      icon: [{url: '/favicon.png', type: 'image/png'}],
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
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
        {/* Google tag (gtag.js) */}
        <Script
          id="google-analytics-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-YFZFKY8NBJ"
          strategy="beforeInteractive"
        />

        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YFZFKY8NBJ');
          `}
        </Script>

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

import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { SITE_CONFIG } from "@/lib/constants"
import AppShell from "@/components/shared/app-shell"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Expert',
    'JavaScript Developer',
    'Web Development',
    'UI/UX Engineer',
    'React.js Specialist',
    'Frontend Architecture',
    'Performance Optimization',
    'Modern Web Development',
    'Parth Dhameliya',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [{ 
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.name} - Frontend Developer Portfolio`,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@parthdhameliya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googleab25a4ee16668b01',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="handle-static-nav" strategy="beforeInteractive">
          {`
            (function() {
              if (typeof window !== 'undefined') {
                window.handleStaticNavigation = function(href) {
                  window.location.href = href;
                }
              }
            })();
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "Inexture solution"
              },
              sameAs: [
                SITE_CONFIG.links.github,
                SITE_CONFIG.links.linkedin
              ],
              description: SITE_CONFIG.description
            })
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
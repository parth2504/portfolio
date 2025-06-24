import './globals.css';
import type { Metadata } from 'next';
import { SITE_CONFIG } from "@/lib/constants";
import { Inter, Space_Grotesk } from 'next/font/google';
import AppShell from "@/components/shared/app-shell";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://parthdhameliya.vercel.app'),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'UI/UX',
    'Parth Dhameliya',
  ],
  authors: [
    {
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  ],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google-site-verification" content="EuGygHRrEZWemHaHMR9VUb2A2PQc2SMMG41O4dzNBOs" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": SITE_CONFIG.name,
              "url": SITE_CONFIG.url,
              "jobTitle": "Frontend Developer",
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Web Development"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "RK University"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Inexture solution"
              },
              "sameAs": [
                SITE_CONFIG.links.linkedin,
                SITE_CONFIG.links.github
              ]
            })
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
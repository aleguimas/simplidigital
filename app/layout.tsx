import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import DomainDetector from "@/components/DomainDetector";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Simplí Digital - Transformação Digital e Inovação",
    template: "%s | Simplí Digital"
  },
  description: "Transformação digital e inovação para empresas que buscam se destacar no mercado. Consultoria especializada em desenvolvimento web, aplicações mobile e estratégia digital.",
  keywords: ["transformação digital", "consultoria", "desenvolvimento web", "aplicações mobile", "estratégia digital", "tecnologia", "inovação", "startup", "empresa digital"],
  authors: [{ name: "Simplí Digital" }],
  creator: "Simplí Digital",
  publisher: "Simplí Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.simpli.ia.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.simpli.ia.br',
    siteName: 'Simplí Digital',
    title: 'Simplí Digital - Transformação Digital e Inovação',
    description: 'Transformação digital e inovação para empresas que buscam se destacar no mercado.',
    images: [
      {
        url: 'https://www.simpli.ia.br/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Simplí Digital - Transformação Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplí Digital - Transformação Digital e Inovação',
    description: 'Transformação digital e inovação para empresas que buscam se destacar no mercado.',
    images: ['https://www.simpli.ia.br/images/og-image.jpg'],
    creator: '@simplidigital',
    site: '@simplidigital',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#A1FF00" />
        <meta name="msapplication-TileColor" content="#A1FF00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Simplí Digital" />
        <meta name="application-name" content="Simplí Digital" />
        <meta name="mobile-web-app-capable" content="yes" />
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        <DomainDetector />
        
        {/* JSON-LD Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Simplí Digital',
              url: 'https://www.simpli.ia.br',
              logo: 'https://www.simpli.ia.br/images/logo-simpli-digital.webp',
              description: 'Transformação digital e inovação para empresas que buscam se destacar no mercado.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Recife',
                addressRegion: 'PE',
                addressCountry: 'BR'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-81-99194-2628',
                contactType: 'customer service',
                email: 'contato@simpli.ia.br'
              },
              sameAs: [
                'https://linkedin.com/company/simpli-digital',
                'https://twitter.com/simplidigital',
                'https://instagram.com/simplidigital'
              ],
              founder: {
                '@type': 'Person',
                name: 'Simplí Digital Team'
              },
              foundingDate: '2020',
              industry: 'Technology',
              keywords: 'transformação digital, consultoria, desenvolvimento web, aplicações mobile, estratégia digital'
            })
          }}
        />
        
        {children}
      </body>
    </html>
  );
}

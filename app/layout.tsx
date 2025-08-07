import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simplí Inovação Digital",
  description: "Consultoria e desenvolvimento para transformação digital.",
  keywords: ["transformação digital", "consultoria", "desenvolvimento", "tecnologia", "inovação"],
  authors: [{ name: "Simplí Inovação Digital" }],
  creator: "Simplí Inovação Digital",
  publisher: "Simplí Inovação Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://simpli-digital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://simpli-digital.com',
    siteName: 'Simplí Inovação Digital',
    title: 'Simplí Inovação Digital',
    description: 'Consultoria e desenvolvimento para transformação digital.',
    images: [
      {
        url: 'https://simpli-digital.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Simplí Inovação Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simplí Inovação Digital',
    description: 'Consultoria e desenvolvimento para transformação digital.',
    images: ['https://simpli-digital.com/og-image.jpg'],
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

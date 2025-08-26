import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en-US', 'es-ES'],
  },
  experimental: {
    optimizeCss: false, // Desabilitando temporariamente
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configurações de performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  // Redirecionamentos para garantir o domínio correto
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: 'https://www.simplidigital.dev/sitemap.xml',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

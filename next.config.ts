import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,

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
  // Headers de segurança e CORS para múltiplos domínios
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
          // CORS para múltiplos domínios
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://www.simpli.ia.br',
          },
        ],
      },
    ];
  },
  
  // Configuração para múltiplos domínios
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: 'https://www.simpli.ia.br/sitemap.xml',
        permanent: true,
      },
      // Redirecionamentos específicos para simpli.ia.br
      {
        source: '/treinamentos/imersao-ia-generativa',
        destination: 'https://www.simpli.ia.br/treinamentos/imersao-ia-generativa',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'simpli.ia.br',
          },
        ],
      },
      {
        source: '/treinamentos',
        destination: 'https://www.simpli.ia.br/treinamentos',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'simpli.ia.br',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

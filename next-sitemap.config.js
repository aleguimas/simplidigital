/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.simpli.ia.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      'https://www.simpli.ia.br/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    {
      loc: '/servicos/desenvolvimento-web',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/servicos/agentes-ia',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/servicos/trafego-pago',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/servicos/consultoria-digital',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },

    {
      loc: '/treinamentos/imersao-ia-generativa',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/treinamentos/atendimento-cliente',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/treinamentos/tecnicas-vendas',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/treinamentos/oratoria-vendas',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
  ],
  transform: async (config, path) => {
    // Personalizar prioridades por página
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/sobre') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/consultorias') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/treinamentos/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/contato') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

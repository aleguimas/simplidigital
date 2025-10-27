/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://simpli.ia.br',
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
      'https://simpli.ia.br/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => [
    // Páginas específicas de IA com prioridade máxima
    {
      loc: '/treinamentos/imersao-ia-generativa',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/treinamentos',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
  ],
  transform: async (config, path) => {
    // Prioridades específicas para o domínio IA
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/treinamentos/')) {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/treinamentos') {
      priority = 0.9;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

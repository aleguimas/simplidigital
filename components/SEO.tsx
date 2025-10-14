import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  breadcrumbs = []
}: SEOProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.simpli.ia.br';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // JSON-LD para Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Simplí Digital',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-simpli-digital.webp`,
    description: 'Transformação digital e inovação para empresas que buscam se destacar no mercado.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
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
  };

  // JSON-LD para BreadcrumbList
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`
    }))
  } : null;

  return (
    <Head>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Simplí Digital" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@simplidigital" />
      <meta name="twitter:creator" content="@simplidigital" />

      {/* Meta tags adicionais */}
      <meta name="author" content="Simplí Digital" />
      <meta name="keywords" content="transformação digital, consultoria, desenvolvimento web, aplicações mobile, estratégia digital, tecnologia, inovação" />
      <meta name="theme-color" content="#00E0E0" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      )}
    </Head>
  );
};

export default SEO; 
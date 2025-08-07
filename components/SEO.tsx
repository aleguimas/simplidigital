import { DefaultSeo } from 'next-seo';

const SEO = () => {
  return (
    <DefaultSeo
      titleTemplate="%s | Simplí Inovação Digital"
      defaultTitle="Simplí Inovação Digital"
      description="Consultoria e desenvolvimento para transformação digital."
      canonical="https://simpli-digital.com"
      openGraph={{
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
      }}
      twitter={{
        handle: '@simplidigital',
        site: '@simplidigital',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'theme-color',
          content: '#000000',
        },
      ]}
    />
  );
};

export default SEO; 
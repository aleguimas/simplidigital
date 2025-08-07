'use client';

import Layout from '@/components/Layout';
import AboutPage from '@/components/AboutPage';
import SEO from '@/components/SEO';

export default function Sobre() {
  return (
    <>
      <SEO
        title="Sobre a Simplí Digital"
        description="Conheça nossa história, missão, visão e valores. Somos especialistas em transformação digital com anos de experiência no mercado."
        canonical="/sobre"
        ogImage="/images/about-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Sobre', url: '/sobre' }
        ]}
      />
      
      <Layout>
        <AboutPage />
      </Layout>
    </>
  );
} 
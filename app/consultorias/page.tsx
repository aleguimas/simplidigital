'use client';

import Layout from '@/components/Layout';
import ConsultingPage from '@/components/ConsultingPage';
import SEO from '@/components/SEO';

export default function Consultorias() {
  return (
    <>
      <SEO
        title="Nossas Consultorias"
        description="Soluções completas em transformação digital: desenvolvimento web, aplicações mobile, estratégia digital e consultoria técnica especializada."
        canonical="/consultorias"
        ogImage="/images/consulting-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Consultorias', url: '/consultorias' }
        ]}
      />
      
      <Layout>
        <ConsultingPage />
      </Layout>
    </>
  );
} 
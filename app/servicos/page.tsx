'use client';

import Layout from '@/components/Layout';
import ServicesPage from '@/components/ServicesPage';
import SEO from '@/components/SEO';

export default function Servicos() {
  return (
    <>
      <SEO
        title="Nossos Serviços"
        description="Soluções completas em transformação digital: desenvolvimento web, agentes de IA, tráfego pago e consultoria digital especializada."
        canonical="/servicos"
        ogImage="/images/consulting-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' }
        ]}
      />
      
      <Layout>
        <ServicesPage />
      </Layout>
    </>
  );
}

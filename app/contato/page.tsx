'use client';

import Layout from '@/components/Layout';
import ContactPage from '@/components/ContactPage';
import SEO from '@/components/SEO';

export default function Contato() {
  return (
    <>
      <SEO
        title="Entre em Contato"
        description="Pronto para transformar seu negócio? Entre em contato conosco e descubra como podemos ajudar sua empresa com soluções digitais inovadoras."
        canonical="/contato"
        ogImage="/images/contact-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Contato', url: '/contato' }
        ]}
      />
      
      <Layout>
        <ContactPage />
      </Layout>
    </>
  );
} 
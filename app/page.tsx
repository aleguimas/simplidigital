'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SEO from '@/components/SEO';
import '../lib/i18n';

export default function Home() {
  const { t } = useTranslation('common');
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Simplificando a Transformação Digital"
        description="Transformação digital e inovação para empresas que buscam se destacar no mercado. Consultoria especializada em desenvolvimento web, aplicações mobile e estratégia digital."
        canonical="/"
        ogImage="/images/hero-snapshot.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' }
        ]}
      />
      
      <Layout>
        {/* Hero Section */}
        <Hero onScrollToContact={scrollToContact} />

        {/* Services Section */}
        <Services />

        {/* Alternating Background Section */}
        <section className="bg-gradient-to-r from-simpli-teal/5 via-white to-simpli-green/5 py-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-simpli-green/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-simpli-teal/10 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t('whyChoose.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpli-green to-simpli-teal">{t('whyChoose.subtitle')}</span>?
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  {t('whyChoose.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-simpli-teal/3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('about.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpli-green to-simpli-teal">{t('about.subtitle')}</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('about.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  {t('about.description2')}
                </p>
                <a
                  href="/sobre"
                  className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, #7ACC00, #00B8B0)'
                  }}
                >
                  {t('about.cta')}
                </a>
              </div>
              <div className="bg-gradient-to-br from-simpli-green/5 to-simpli-teal/5 rounded-2xl p-8 border border-simpli-green/10">
                <div className="text-center">
                  <div className="w-28 h-28 border-4 border-simpli-teal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Image
                      src="/images/marca-simpli.png"
                      alt="Marca Simplí"
                      width={56}
                      height={56}
                      className="w-14 h-14"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('about.mission.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* CTA Section */}
        <section 
          ref={contactRef} 
          className="py-20 text-white"
          style={{
            background: '#1f2937'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <a
              href="/contato"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(to right, #7ACC00, #00B8B0)',
                color: 'white'
              }}
            >
              {t('cta.button')}
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}

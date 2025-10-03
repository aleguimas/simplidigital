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

        {/* Clients Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Empresas que confiam no nosso trabalho
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Parceiros que escolheram a Simplí para impulsionar sua transformação digital.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-mirroah.webp"
                  alt="Mirroah"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-natal-home-center.webp"
                  alt="Natal Home Center"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-sebrae.webp"
                  alt="SEBRAE"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-prefeitura-jaboatao.webp"
                  alt="Prefeitura de Jaboatão"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-senac.webp"
                  alt="SENAC"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-liner.webp"
                  alt="Liner"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-fecomercio-pe.webp"
                  alt="FECOMÉRCIO PE"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-broomer.webp"
                  alt="Broomer"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-bluk.webp"
                  alt="Bluk"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-plaza.webp"
                  alt="Plaza"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Image
                  src="/clients/logo-tacaruna.webp"
                  alt="Tacaruna"
                  width={240}
                  height={120}
                  className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-simpli-teal/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Treinamentos In Company
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Além de desenvolvimento e consultoria, oferecemos treinamentos corporativos especializados 
                para transformar sua equipe e impulsionar os resultados da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                              {/* IA Generativa */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Imersão de IA para Negócios</h3>
                <p className="text-gray-600 mb-4">
                  Transforme desafios em oportunidades com um workshop intensivo de 10 horas.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Duração:</span>
                    <span className="font-semibold">10 horas</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Formato:</span>
                    <span className="font-semibold">Presencial + Online</span>
                  </div>
                </div>
                <a
                  href="/treinamentos/imersao-ia-generativa"
                  className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  Saiba Mais
                </a>
              </div>

              {/* Atendimento ao Cliente */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Atendimento ao Cliente</h3>
                <p className="text-gray-600 mb-4">
                  Excelência no atendimento físico e online. 
                  Aumente a satisfação em 85% e reduza reclamações em 70%.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Duração:</span>
                    <span className="font-semibold">12 horas</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Formato:</span>
                    <span className="font-semibold">Presencial</span>
                  </div>
                </div>
                <a
                  href="/treinamentos/atendimento-cliente"
                  className="inline-block w-full text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200"
                >
                  Saiba Mais
                </a>
              </div>

              {/* Técnicas de Vendas */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Técnicas de Vendas</h3>
                <p className="text-gray-600 mb-4">
                  Vendas que convertem em qualquer ambiente. 
                  Aumente as vendas em 150% e melhore a conversão em 80%.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Duração:</span>
                    <span className="font-semibold">20 horas</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Formato:</span>
                    <span className="font-semibold">Presencial/Híbrido</span>
                  </div>
                </div>
                <a
                  href="/treinamentos/tecnicas-vendas"
                  className="inline-block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                >
                  Saiba Mais
                </a>
              </div>

              {/* Visual Merchandising */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Merchandising</h3>
                <p className="text-gray-600 mb-4">
                  Transforme seu ponto de venda. 
                  Aumente o ticket médio em 25% e melhore a conversão em 40%.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <div className="flex justify-between mb-1">
                    <span>Duração:</span>
                    <span className="font-semibold">8 horas</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Formato:</span>
                    <span className="font-semibold">Presencial/Online</span>
                  </div>
                </div>
                <a
                  href="/treinamentos/visual-merchandising"
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Saiba Mais
                </a>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contato"
                className="inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  background: 'linear-gradient(to right, #7ACC00, #00B8B0)'
                }}
              >
                Solicitar Orçamento dos Treinamentos
              </a>
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

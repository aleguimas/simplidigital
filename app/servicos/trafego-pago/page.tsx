'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactPage from '@/components/ContactPage';
import '../../lib/i18n';

export default function TrafegoPago() {
  const { t } = useTranslation('common');
  const handleScrollToContact = () => {
    window.location.href = '/contato';
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: t('pages.serviceDetails.paidTraffic.benefits.targeting.title'),
      description: t('pages.serviceDetails.paidTraffic.benefits.targeting.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: t('pages.serviceDetails.paidTraffic.benefits.measurable.title'),
      description: t('pages.serviceDetails.paidTraffic.benefits.measurable.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: t('pages.serviceDetails.paidTraffic.benefits.scalable.title'),
      description: t('pages.serviceDetails.paidTraffic.benefits.scalable.description')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('pages.serviceDetails.paidTraffic.benefits.fast.title'),
      description: t('pages.serviceDetails.paidTraffic.benefits.fast.description')
    }
  ];

  const process = [
    {
      step: t('pages.serviceDetails.paidTraffic.process.research.step'),
      title: t('pages.serviceDetails.paidTraffic.process.research.title'),
      description: t('pages.serviceDetails.paidTraffic.process.research.description')
    },
    {
      step: t('pages.serviceDetails.paidTraffic.process.strategy.step'),
      title: t('pages.serviceDetails.paidTraffic.process.strategy.title'),
      description: t('pages.serviceDetails.paidTraffic.process.strategy.description')
    },
    {
      step: t('pages.serviceDetails.paidTraffic.process.execution.step'),
      title: t('pages.serviceDetails.paidTraffic.process.execution.title'),
      description: t('pages.serviceDetails.paidTraffic.process.execution.description')
    },
    {
      step: t('pages.serviceDetails.paidTraffic.process.optimization.step'),
      title: t('pages.serviceDetails.paidTraffic.process.optimization.title'),
      description: t('pages.serviceDetails.paidTraffic.process.optimization.description')
    }
  ];

  return (
    <>
      <SEO
        title="Tráfego Pago | Simplí Digital"
        description="Gerenciamos campanhas de marketing digital para maximizar seu ROI e atrair leads qualificados para sua empresa."
        canonical="/servicos/trafego-pago"
        ogImage="/images/trafego-pago-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Tráfego Pago', url: '/servicos/trafego-pago' }
        ]}
      />
      
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-simpli text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('pages.serviceDetails.paidTraffic.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              {t('pages.serviceDetails.paidTraffic.hero.subtitle')}
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              {t('pages.serviceDetails.paidTraffic.hero.cta')}
            </button>
          </div>
        </section>

        {/* O que é Tráfego Pago */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t('pages.serviceDetails.paidTraffic.whatIs.title')}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t('pages.serviceDetails.paidTraffic.whatIs.description1')}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {t('pages.serviceDetails.paidTraffic.whatIs.description2')}
                </p>
                <p className="text-lg text-gray-600">
                  {t('pages.serviceDetails.paidTraffic.whatIs.description3')}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('pages.serviceDetails.paidTraffic.whatIs.technologies.title')}
                  </h3>
                  <p className="text-gray-600">
                    {t('pages.serviceDetails.paidTraffic.whatIs.technologies.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('pages.serviceDetails.paidTraffic.benefits.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('pages.serviceDetails.paidTraffic.benefits.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-simpli-green rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como fazemos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('pages.serviceDetails.paidTraffic.process.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('pages.serviceDetails.paidTraffic.process.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case de exemplo */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('pages.serviceDetails.paidTraffic.caseStudy.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('pages.serviceDetails.paidTraffic.caseStudy.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('pages.serviceDetails.paidTraffic.caseStudy.title2')}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t('pages.serviceDetails.paidTraffic.caseStudy.description')}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {t('pages.serviceDetails.paidTraffic.caseStudy.features', { returnObjects: true }).map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      &ldquo;{t('pages.serviceDetails.paidTraffic.caseStudy.testimonial')}&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">- {t('pages.serviceDetails.paidTraffic.caseStudy.author')}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.serviceDetails.paidTraffic.caseStudy.results.title')}</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-simpli-green">{t('pages.serviceDetails.paidTraffic.caseStudy.results.sales.value')}</div>
                        <div className="text-sm text-gray-600">{t('pages.serviceDetails.paidTraffic.caseStudy.results.sales.label')}</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-simpli-teal">{t('pages.serviceDetails.paidTraffic.caseStudy.results.cpa.value')}</div>
                        <div className="text-sm text-gray-600">{t('pages.serviceDetails.paidTraffic.caseStudy.results.cpa.label')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactPage />
        <FloatingWhatsApp />
      </Layout>
    </>
  );
}

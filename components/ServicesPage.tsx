'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { BiCodeBlock, BiBrain, BiBarChart, BiShowAlt } from 'react-icons/bi';
import ContactPage from './ContactPage';
import '../lib/i18n';

const ServicesPage = () => {
  const { t } = useTranslation('common');

  const scrollToContact = () => {
    window.location.href = '/contato';
  };

  const services = [
    {
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      icon: BiCodeBlock,
      href: '/servicos/desenvolvimento-web',
      iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      features: ['Sites responsivos', 'Aplicações web', 'E-commerce', 'Sistemas personalizados']
    },
    {
      title: t('services.aiAgents.title'),
      description: t('services.aiAgents.description'),
      icon: BiBrain,
      href: '/servicos/agentes-ia',
      iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
      features: ['Chatbots inteligentes', 'Automação de processos', 'Análise de dados', 'Integração com APIs']
    },
    {
      title: t('services.paidTraffic.title'),
      description: t('services.paidTraffic.description'),
      icon: BiBarChart,
      href: '/servicos/trafego-pago',
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Remarketing']
    },
    {
      title: t('services.digitalConsulting.title'),
      description: t('services.digitalConsulting.description'),
      icon: BiShowAlt,
      href: '/servicos/consultoria-digital',
      iconBg: 'bg-gradient-to-br from-orange-400 to-red-500',
      features: ['Estratégia digital', 'Transformação de processos', 'Análise de mercado', 'Roadmap tecnológico']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-simpli-green/5 via-white to-simpli-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('pages.services.title')} <span className="text-simpli-teal">{t('nav.services')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('pages.services.subtitle')}
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-simpli text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('pages.services.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-simpli-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 text-simpli-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer no mundo digital.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #7ACC00, #00B8B0)',
              color: 'white'
            }}
          >
            Fale Conosco
          </button>
        </div>
      </section>

      <ContactPage />
    </div>
  );
};

export default ServicesPage;

'use client';

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ContactPage from './ContactPage';
import '../lib/i18n';

const ConsultingPage = () => {
  const { t } = useTranslation('common');

  const handleScrollToContact = () => {
    window.location.href = '/contato';
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Estratégia Digital',
      description: 'Desenvolvemos estratégias completas de transformação digital, desde análise de mercado até implementação de soluções inovadoras.',
      features: ['Análise de mercado', 'Roadmap digital', 'Transformação cultural', 'Métricas e KPIs']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Desenvolvimento Web',
      description: 'Criamos aplicações web modernas e responsivas utilizando as melhores tecnologias do mercado para impulsionar seu negócio.',
      features: ['Sites responsivos', 'E-commerce', 'Sistemas web', 'APIs e integrações']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Aplicações Mobile',
      description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android com foco na experiência do usuário e performance.',
      features: ['Apps nativos', 'Apps híbridos', 'PWA', 'Manutenção e suporte']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Consultoria Técnica',
      description: 'Oferecemos assessoria especializada em tecnologia, arquitetura de sistemas e otimização de processos digitais.',
      features: ['Arquitetura de sistemas', 'Otimização de performance', 'Segurança digital', 'Migração de sistemas']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Marketing Digital',
      description: 'Estratégias de marketing digital completas para aumentar a visibilidade e conversões da sua marca.',
      features: ['SEO e SEM', 'Redes sociais', 'Email marketing', 'Analytics e relatórios']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Qualidade e Testes',
      description: 'Garantimos a qualidade e confiabilidade dos seus sistemas através de testes automatizados e processos rigorosos.',
      features: ['Testes automatizados', 'QA e controle de qualidade', 'Monitoramento', 'DevOps']
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-simpli text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('pages.consulting.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('pages.consulting.description')}
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para atender todas as necessidades da sua transformação digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 group">
                {/* Ícone */}
                <div className="w-16 h-16 bg-gradient-simpli rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Título e Descrição */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-simpli-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={handleScrollToContact}
                  className="w-full bg-gradient-simpli text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105"
                >
                  Solicitar Orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado e transparente para garantir resultados excepcionais em todos os projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-simpli-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Descoberta</h3>
              <p className="text-gray-600">Análise profunda das necessidades e objetivos do seu negócio.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-simpli-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estratégia</h3>
              <p className="text-gray-600">Desenvolvimento de um plano personalizado para alcançar seus objetivos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-simpli-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Execução</h3>
              <p className="text-gray-600">Implementação ágil e eficiente das soluções definidas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-simpli-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Otimização</h3>
              <p className="text-gray-600">Monitoramento contínuo e melhorias baseadas em dados.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactPage />
    </>
  );
};

export default ConsultingPage;

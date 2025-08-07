'use client';

import { useRef } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function ConsultoriaDigital() {
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Estratégia Personalizada',
      description: 'Planejamento sob medida para seus objetivos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Implementação Prática',
      description: 'Não apenas consultoria, mas execução completa'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'ROI Mensurável',
      description: 'Resultados quantificáveis e acompanhamento contínuo'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Suporte Contínuo',
      description: 'Acompanhamento e ajustes durante todo o processo'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Diagnóstico',
      description: 'Análise completa da situação atual da empresa'
    },
    {
      step: '02',
      title: 'Estratégia',
      description: 'Desenvolvimento do plano de transformação digital'
    },
    {
      step: '03',
      title: 'Implementação',
      description: 'Execução das soluções definidas na estratégia'
    },
    {
      step: '04',
      title: 'Otimização',
      description: 'Monitoramento e ajustes para maximizar resultados'
    }
  ];

  return (
    <>
      <SEO
        title="Consultoria Digital | Simplí Digital"
        description="Assessoramos empresas na transformação digital, desde a estratégia até a implementação de soluções."
        canonical="/servicos/consultoria-digital"
        ogImage="/images/consultoria-digital-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Consultoria Digital', url: '/servicos/consultoria-digital' }
        ]}
      />
      
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-simpli text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Consultoria Digital
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Transforme seu negócio com estratégias digitais personalizadas e implementação prática.
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>

        {/* O que é Consultoria Digital */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  O que é Consultoria Digital?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Consultoria Digital é o processo de assessorar empresas na transformação digital, 
                  desde a análise da situação atual até a implementação de soluções tecnológicas 
                  que impulsionem o crescimento do negócio.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Nossa abordagem vai além da consultoria tradicional. Não apenas identificamos 
                  oportunidades e criamos estratégias, mas também implementamos as soluções e 
                  acompanhamos os resultados de forma contínua.
                </p>
                <p className="text-lg text-gray-600">
                  Trabalhamos com empresas de todos os portes, desde startups até grandes corporações, 
                  adaptando nossas metodologias e soluções às necessidades específicas de cada negócio.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Metodologia Comprovada
                  </h3>
                  <p className="text-gray-600">
                    Processo estruturado que já transformou mais de 100 empresas.
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
                Benefícios da Consultoria Digital
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Por que escolher nossa consultoria digital?
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
                Como Fazemos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nosso processo de consultoria digital em 4 etapas
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
                Case de Sucesso
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Veja como transformamos a Indústria Moderna
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Indústria Moderna - Transformação Completa
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A Indústria Moderna, uma empresa tradicional de 30 anos, precisava se adaptar 
                    ao mundo digital. Nossa consultoria incluiu:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Digitalização de processos internos
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Implementação de CRM e ERP
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Estratégia de marketing digital
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      &ldquo;A consultoria da Simplí Digital foi fundamental para nossa transformação. 
                      Conseguimos aumentar a eficiência em 70% e expandir para novos mercados. 
                      Hoje somos uma empresa moderna e competitiva.&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">- Carlos Mendes, CEO da Indústria Moderna</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Resultados</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-simpli-green">70%</div>
                        <div className="text-sm text-gray-600">Mais eficiência</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-simpli-teal">3x</div>
                        <div className="text-sm text-gray-600">Mais vendas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={contactRef} className="py-20" style={{ background: '#1f2937' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Entre em contato conosco e descubra como a consultoria digital pode impulsionar seus resultados.
            </p>
            <button
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #7ACC00, #00B8B0)',
                color: 'white'
              }}
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>

        <FloatingWhatsApp />
      </Layout>
    </>
  );
}

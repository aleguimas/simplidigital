'use client';

import { useRef } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function TrafegoPago() {
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'ROI Otimizado',
      description: 'Maximizamos o retorno sobre investimento das suas campanhas'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Leads Qualificados',
      description: 'Atraímos público-alvo específico e interessado'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Resultados Rápidos',
      description: 'Veja resultados em tempo real e ajuste estratégias'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
        </svg>
      ),
      title: 'Escalabilidade',
      description: 'Aumente ou diminua investimentos conforme resultados'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Análise de Mercado',
      description: 'Estudamos seu público-alvo e concorrência'
    },
    {
      step: '02',
      title: 'Estratégia de Campanha',
      description: 'Definimos canais, orçamentos e objetivos'
    },
    {
      step: '03',
      title: 'Criação & Otimização',
      description: 'Criamos anúncios e otimizamos performance'
    },
    {
      step: '04',
      title: 'Monitoramento & Ajustes',
      description: 'Acompanhamos resultados e fazemos ajustes'
    }
  ];

  return (
    <>
      <SEO
        title="Tráfego Pago | Simplí Digital"
        description="Gerenciamos campanhas em Google Ads, Facebook Ads e LinkedIn Ads, maximizando ROI e atraindo leads qualificados."
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
              Tráfego Pago
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Maximize seu ROI com campanhas de tráfego pago estrategicamente planejadas e otimizadas.
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>

        {/* O que é Tráfego Pago */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  O que é Tráfego Pago?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tráfego pago é uma estratégia de marketing digital onde você paga para exibir seus anúncios 
                  em plataformas como Google, Facebook, Instagram e LinkedIn. É uma forma eficiente de 
                  alcançar seu público-alvo de forma direcionada e mensurável.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Diferente do tráfego orgânico, o tráfego pago oferece controle total sobre quem vê seus anúncios, 
                  quando eles aparecem e quanto você gasta. Isso permite otimizações constantes para maximizar 
                  o retorno sobre investimento.
                </p>
                <p className="text-lg text-gray-600">
                  Nossa equipe especializada gerencia campanhas em todas as principais plataformas, 
                  garantindo que cada real investido gere o máximo de valor para seu negócio.
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
                    Plataformas Principais
                  </h3>
                  <p className="text-gray-600">
                    Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads e muito mais.
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
                Benefícios do Tráfego Pago
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Por que investir em tráfego pago para seu negócio?
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
                Nosso processo de gestão de tráfego pago em 4 etapas
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
                Veja como otimizamos as campanhas da E-commerce Plus
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    E-commerce Plus - Campanhas Google Ads
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A E-commerce Plus precisava aumentar suas vendas online. Implementamos uma estratégia 
                    completa de tráfego pago que incluiu:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Campanhas de pesquisa e display no Google Ads
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Remarketing no Facebook e Instagram
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Otimização contínua baseada em dados
                    </li>
                  </ul>
                                         <div className="bg-gray-50 p-4 rounded-lg">
                         <p className="text-gray-700 italic">
                           &ldquo;A Simplí Digital transformou completamente nossas campanhas de tráfego pago. 
                           Conseguimos aumentar nossas vendas em 200% e reduzir o custo por aquisição em 40%. 
                           O ROI das campanhas nunca foi tão alto.&rdquo;
                         </p>
                         <p className="text-sm text-gray-600 mt-2">- Ana Costa, Marketing Manager da E-commerce Plus</p>
                       </div>
                </div>
                <div className="bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Resultados</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-simpli-green">200%</div>
                        <div className="text-sm text-gray-600">Aumento em vendas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-simpli-teal">40%</div>
                        <div className="text-sm text-gray-600">Redução CPA</div>
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
              Pronto para Aumentar suas Vendas?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Entre em contato conosco e descubra como o tráfego pago pode impulsionar seus resultados.
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

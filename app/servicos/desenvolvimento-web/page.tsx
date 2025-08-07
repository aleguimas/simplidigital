'use client';

import { useRef } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function DesenvolvimentoWeb() {
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Otimizada',
      description: 'Sites rápidos e responsivos que carregam em segundos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'SEO Avançado',
      description: 'Otimização completa para motores de busca'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Design Responsivo',
      description: 'Funciona perfeitamente em todos os dispositivos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
        </svg>
      ),
      title: 'Segurança Garantida',
      description: 'Proteção completa contra ameaças digitais'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Análise profunda das necessidades e objetivos do projeto'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Criação de wireframes e protótipos interativos'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Desenvolvimento com as melhores tecnologias do mercado'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Testes rigorosos e lançamento otimizado'
    }
  ];

  return (
    <>
      <SEO
        title="Desenvolvimento Web | Simplí Digital"
        description="Criamos sites e landing pages modernos e responsivos utilizando as melhores tecnologias, otimizados para SEO e performance."
        canonical="/servicos/desenvolvimento-web"
        ogImage="/images/desenvolvimento-web-hero.jpg"
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Serviços', url: '/servicos' },
          { name: 'Desenvolvimento Web', url: '/servicos/desenvolvimento-web' }
        ]}
      />
      
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-simpli text-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Desenvolvimento Web
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Criamos sites e landing pages modernos e responsivos que convertem visitantes em clientes.
            </p>
            <button
              onClick={handleScrollToContact}
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </section>

        {/* O que é Desenvolvimento Web */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  O que é Desenvolvimento Web?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  O desenvolvimento web é o processo de criação de sites e aplicações web que funcionam na internet. 
                  Envolve desde a criação de sites institucionais até e-commerces complexos e aplicações web avançadas.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Utilizamos as tecnologias mais modernas do mercado, como React, Next.js, TypeScript e Node.js, 
                  para criar soluções que não apenas impressionam visualmente, mas também oferecem performance 
                  excepcional e experiência de usuário superior.
                </p>
                <p className="text-lg text-gray-600">
                  Nossa abordagem combina design criativo com desenvolvimento técnico robusto, garantindo que 
                  cada projeto seja único, funcional e alinhado com os objetivos de negócio dos nossos clientes.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Tecnologias Modernas
                  </h3>
                  <p className="text-gray-600">
                    React, Next.js, TypeScript, Node.js e muito mais para criar experiências web excepcionais.
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
                Benefícios do Desenvolvimento Web
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Por que escolher nossos serviços de desenvolvimento web?
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
                Nosso processo de desenvolvimento web em 4 etapas
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
                Veja como transformamos o site da TechCorp
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    TechCorp - Transformação Digital
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A TechCorp precisava de um site moderno e responsivo que refletisse sua posição 
                    como líder em tecnologia. Desenvolvemos uma solução completa que incluiu:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Site responsivo com design moderno
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Otimização completa para SEO
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-simpli-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Integração com CRM e analytics
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic">
                      &ldquo;A Simplí Digital transformou completamente nossa presença online. 
                      O novo site aumentou nossas conversões em 150% e melhorou significativamente 
                      nossa visibilidade no Google.&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">- Maria Silva, CEO da TechCorp</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-simpli-green/20 to-simpli-teal/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Resultados</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-simpli-green">150%</div>
                        <div className="text-sm text-gray-600">Aumento em conversões</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-simpli-teal">3x</div>
                        <div className="text-sm text-gray-600">Mais tráfego orgânico</div>
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
              Pronto para Transformar seu Site?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Entre em contato conosco e descubra como podemos criar um site que impulsiona seus resultados.
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

'use client';

import { useRef } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Hero onScrollToContact={scrollToContact} />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para transformação digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Desenvolvimento Web
              </h3>
              <p className="text-gray-600">
                Criamos aplicações web modernas e responsivas utilizando as melhores tecnologias do mercado.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Aplicações Mobile
              </h3>
              <p className="text-gray-600">
                Desenvolvemos aplicativos nativos e híbridos para iOS e Android com foco na experiência do usuário.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Consultoria Digital
              </h3>
              <p className="text-gray-600">
                Assessoramos empresas na transformação digital, desde estratégia até implementação de soluções.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre a Simplí Digital
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos uma empresa especializada em transformação digital, focada em criar soluções inovadoras 
                que impulsionam o crescimento dos nossos clientes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Com anos de experiência no mercado, nossa equipe combina conhecimento técnico avançado 
                com uma abordagem estratégica para entregar resultados excepcionais.
              </p>
              <a
                href="/sobre"
                className="inline-block bg-gradient-simpli text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Saiba Mais
              </a>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Inovação constante
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Qualidade excepcional
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Foco no cliente
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Transparência total
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={contactRef} className="py-20 bg-gradient-simpli text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar o próximo nível na transformação digital.
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-simpli-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>
    </Layout>
  );
}

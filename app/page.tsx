'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SEO from '@/components/SEO';

export default function Home() {
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
                  Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpli-green to-simpli-teal">Simplí</span>?
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Combinamos expertise técnica com uma abordagem personalizada para entregar soluções 
                  que realmente fazem a diferença no seu negócio.
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
                  Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-simpli-green to-simpli-teal">Simplí</span>
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
                  className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, #7ACC00, #00B8B0)'
                  }}
                >
                  Saiba Mais
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
                    Nossa Missão
                  </h3>
                  <p className="text-gray-600">
                    Transformar empresas através da inovação digital, fornecendo soluções tecnológicas 
                    que otimizam processos e impulsionam o crescimento sustentável.
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
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar sua empresa 
              a alcançar o próximo nível na transformação digital.
            </p>
                            <a
                  href="/contato"
                  className="inline-block px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    background: 'linear-gradient(to right, #7ACC00, #00B8B0)',
                    color: 'white'
                  }}
                >
                  Solicitar Orçamento
                </a>
          </div>
        </section>
      </Layout>
    </>
  );
}

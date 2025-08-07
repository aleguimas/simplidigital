'use client';

import { useRef } from 'react';

const AboutPage = () => {
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const milestones = [
    {
      year: '2020',
      title: 'Fundação',
      description: 'Nascimento da Simplí Digital com foco em transformação digital'
    },
    {
      year: '2021',
      title: 'Primeiros Clientes',
      description: 'Atendimento a 50+ empresas em projetos de inovação'
    },
    {
      year: '2022',
      title: 'Expansão',
      description: 'Abertura de escritório em São Paulo e equipe de 20+ profissionais'
    },
    {
      year: '2023',
      title: 'Reconhecimento',
      description: 'Prêmio de Melhor Consultoria Digital do Brasil'
    },
    {
      year: '2024',
      title: 'Futuro',
      description: 'Meta de impactar 1000+ empresas com soluções digitais'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-simpli text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sobre a Simplí Digital
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transformando ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Missão */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-simpli rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
              <p className="text-lg text-gray-600">
                Simplificar a transformação digital das empresas, oferecendo soluções inovadoras e acessíveis que impulsionem o crescimento e a competitividade no mercado digital.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-simpli rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
              <p className="text-lg text-gray-600">
                Ser a principal referência em transformação digital no Brasil, reconhecida pela excelência, inovação e impacto positivo na sociedade.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-simpli-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h3>
                <p className="text-gray-600">Sempre buscamos novas soluções e tecnologias para resolver desafios complexos.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-simpli-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade</h3>
                <p className="text-gray-600">Comprometimento com a excelência em todos os projetos e entregas.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-simpli-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Colaboração</h3>
                <p className="text-gray-600">Trabalhamos em parceria com nossos clientes para alcançar resultados excepcionais.</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="w-12 h-12 bg-simpli-teal rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparência</h3>
                <p className="text-gray-600">Comunicação clara e honesta em todas as etapas do projeto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma trajetória de crescimento e inovação que transformou a Simplí Digital em referência no mercado.
            </p>
          </div>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-simpli-green to-simpli-teal hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="flex-1 lg:max-w-md">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl font-bold text-simpli-teal mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Ponto na linha do tempo */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 mx-8">
                    <div className="w-4 h-4 bg-gradient-simpli rounded-full shadow-lg"></div>
                  </div>

                  {/* Espaço vazio para alinhamento */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
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
            Conheça nossa equipe e descubra como podemos ajudar sua empresa a alcançar o próximo nível na transformação digital.
          </p>
          <button
            onClick={handleScrollToContact}
                            className="bg-white text-simpli-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Fale Conosco
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

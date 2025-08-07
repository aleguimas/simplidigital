import Layout from '@/components/Layout';

export default function Consultorias() {
  return (
    <Layout>
      {/* Hero Section */}
        <section className="bg-gradient-simpli text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossas Consultorias
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Soluções especializadas em transformação digital para impulsionar 
                o crescimento e a eficiência do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Serviços Especializados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Oferecemos consultoria completa em transformação digital
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Desenvolvimento Web</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Criamos aplicações web modernas, responsivas e escaláveis utilizando as melhores 
                  tecnologias do mercado como React, Next.js, Node.js e muito mais.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Sites institucionais e e-commerce
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Aplicações web complexas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Sistemas de gestão empresarial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    APIs e integrações
                  </li>
                </ul>
              </div>

              {/* Mobile Development */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Aplicações Mobile</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Desenvolvemos aplicativos nativos e híbridos para iOS e Android, 
                  focando na experiência do usuário e performance.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Apps nativos iOS e Android
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Aplicações híbridas React Native
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Progressive Web Apps (PWA)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Manutenção e atualizações
                  </li>
                </ul>
              </div>

              {/* Digital Strategy */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Estratégia Digital</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Desenvolvemos estratégias digitais personalizadas para transformar 
                  seu negócio e aumentar a competitividade no mercado.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Análise de mercado e concorrência
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Roadmap de transformação digital
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Otimização de processos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Implementação de tecnologias
                  </li>
                </ul>
              </div>

              {/* Automation */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Automação</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Automatizamos processos empresariais para aumentar a eficiência 
                  e reduzir custos operacionais.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Automação de processos (RPA)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Integração de sistemas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Workflows automatizados
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Dashboards e relatórios
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Processo estruturado para garantir o sucesso do seu projeto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                               <div className="w-16 h-16 bg-gradient-simpli text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                 1
               </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Descoberta</h3>
                <p className="text-gray-600">
                  Análise profunda das necessidades e objetivos do seu negócio.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                               <div className="w-16 h-16 bg-gradient-simpli text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                 2
               </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Planejamento</h3>
                <p className="text-gray-600">
                  Desenvolvimento da estratégia e arquitetura da solução.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                               <div className="w-16 h-16 bg-gradient-simpli text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                 3
               </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Execução</h3>
                <p className="text-gray-600">
                  Desenvolvimento e implementação da solução com metodologia ágil.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                               <div className="w-16 h-16 bg-gradient-simpli text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                 4
               </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Suporte</h3>
                <p className="text-gray-600">
                  Acompanhamento contínuo e suporte técnico especializado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-simpli text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consultoria personalizada 
              e descubra como podemos ajudar sua empresa.
            </p>
                         <a
               href="/contato"
               className="inline-block bg-white text-simpli-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
             >
               Solicitar Consultoria
             </a>
          </div>
        </section>

    </Layout>
  );
} 
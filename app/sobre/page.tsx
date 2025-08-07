import Layout from '@/components/Layout';

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
        <section className="bg-gradient-simpli text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a Simplí Digital
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Somos uma empresa especializada em transformação digital, 
                focada em criar soluções inovadoras que impulsionam o crescimento dos nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transformar empresas através da inovação digital, fornecendo soluções tecnológicas 
                  que otimizam processos, melhoram a experiência do cliente e impulsionam o crescimento 
                  sustentável dos negócios.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-purple-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Visão</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ser referência em transformação digital no Brasil, reconhecida pela excelência 
                  em nossos serviços e pelo impacto positivo que geramos na vida dos nossos clientes 
                  e na sociedade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Princípios que guiam nossas ações e relacionamentos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inovação</h3>
                <p className="text-gray-600">
                  Buscamos constantemente novas soluções e tecnologias para resolver desafios complexos.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Qualidade</h3>
                <p className="text-gray-600">
                  Comprometimento com a excelência em todos os projetos e entregas.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Colaboração</h3>
                <p className="text-gray-600">
                  Trabalhamos em equipe e valorizamos a parceria com nossos clientes.
                </p>
              </div>

              {/* Value 4 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Confiança</h3>
                <p className="text-gray-600">
                  Construímos relacionamentos baseados na transparência e confiança mútua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Profissionais experientes e apaixonados por tecnologia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">👨‍💻</span>
                </div>
                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">João Silva</h3>
                 <p className="text-simpli-teal mb-4">CEO & Fundador</p>
                <p className="text-gray-600">
                  Especialista em transformação digital com mais de 10 anos de experiência.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">👩‍💻</span>
                </div>
                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Santos</h3>
                 <p className="text-simpli-teal mb-4">CTO</p>
                <p className="text-gray-600">
                  Desenvolvedora full-stack com expertise em tecnologias modernas.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-gray-600">👨‍💼</span>
                </div>
                                 <h3 className="text-xl font-semibold text-gray-900 mb-2">Pedro Costa</h3>
                 <p className="text-simpli-teal mb-4">Diretor de Projetos</p>
                <p className="text-gray-600">
                  Especialista em gestão de projetos e metodologias ágeis.
                </p>
              </div>
            </div>
          </div>
        </section>

    </Layout>
  );
} 
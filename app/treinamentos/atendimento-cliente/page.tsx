import { Metadata } from 'next'
import Image from 'next/image'
import Layout from '../../../components/Layout'

export const metadata: Metadata = {
  title: 'Atendimento ao Cliente | Treinamento In Company em Todo Brasil | Simplí Digital',
  description: 'Transforme sua equipe de atendimento com treinamento intensivo de 8h + mentoria de 3 meses. Luciano Fernandes (36 anos de experiência) e Alexandre Guimarães. Aumente vendas em 150% e satisfação em 85%. Atendemos empresas em todo o Brasil.',
  keywords: 'treinamento atendimento cliente, Luciano Fernandes, atendimento premium, vendas consultivas, satisfação cliente, treinamento in company, atendimento empresarial, qualidade atendimento, treinamento vendas, atendimento SPA, bem-estar, cross-selling, up-selling, objeções vendas, follow-up vendas, comunicação verbal, linguagem corporal, experiência premium, mentoria vendas, indicadores vendas, ticket médio, conversão vendas, visual merchandising, trade marketing, desenvolvimento equipes, alta performance, Nestlé, Bunge, Grupo Schincariol, treinamento atendimento São Paulo, treinamento atendimento Rio de Janeiro, treinamento atendimento Brasília, treinamento atendimento Recife, treinamento atendimento Belo Horizonte, treinamento atendimento Porto Alegre, treinamento atendimento Salvador, treinamento atendimento Fortaleza, treinamento atendimento Curitiba, treinamento atendimento Manaus',
  openGraph: {
    title: 'Atendimento ao Cliente | Simplí Digital - Todo Brasil',
    description: 'Treinamento intensivo de 8h + mentoria de 3 meses para transformar seu atendimento. Luciano Fernandes (36 anos de experiência) e Alexandre Guimarães (Guimas). Atendemos empresas em todo o território nacional.',
    url: 'https://simplidigital.com.br/treinamentos/atendimento-cliente',
    siteName: 'Simplí Digital',
    images: [
      {
        url: 'https://simplidigital.com.br/images/consulting-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Atendimento ao Cliente Premium - Simplí Digital - Cobertura Nacional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://simplidigital.com.br/treinamentos/atendimento-cliente',
    languages: {
      'pt-BR': 'https://simplidigital.com.br/treinamentos/atendimento-cliente',
      'en-US': 'https://simplidigital.com.br/en/trainings/customer-service',
      'es-ES': 'https://simplidigital.com.br/es/entrenamientos/atencion-cliente',
    },
  },
}

export default function AtendimentoClientePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Atendimento ao Cliente
            </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto px-4">
            Transforme sua equipe de atendimento com treinamento intensivo de 8h + mentoria de 3 meses
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Duração</span>
              <div className="text-lg md:text-2xl font-bold">8 horas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Formato</span>
              <div className="text-lg md:text-2xl font-bold">Presencial</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Mentoria</span>
              <div className="text-lg md:text-2xl font-bold">3 meses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Cobertura</span>
              <div className="text-lg md:text-2xl font-bold">Todo Brasil</div>
            </div>
          </div>
          
          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contato"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🚀 Solicitar Proposta Comercial
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Atendimento ao Cliente Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              📞 Falar Diretamente
            </a>
          </div>
          

        </div>
      </section>

      {/* Sobre o Treinamento */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre o Treinamento de Atendimento Premium
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Capacite sua equipe para oferecer atendimento excepcional e aumentar vendas significativamente
            </p>
          </div>

          {/* Cobertura Nacional */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Cobertura Nacional</h3>
              <p className="text-base md:text-lg mb-4 px-2">
                Nossos treinamentos são realizados em <strong>todo o Brasil</strong>, 
                levando excelência em atendimento para empresas de Norte a Sul.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm">
                <div>
                  <div className="font-semibold">📍 Presencial</div>
                  <div className="text-sm">Em sua empresa ou local escolhido</div>
                </div>
                <div>
                  <div className="font-semibold">🎯 Personalizado</div>
                  <div className="text-sm">Adaptado ao seu setor e necessidades</div>
                </div>
                <div>
                  <div className="font-semibold">🚀 Flexibilidade</div>
                  <div className="text-sm">Adaptamos ao seu cronograma</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                O que você vai conquistar:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Mentalidade comercial focada no cliente:</strong> transforme sua equipe em vendedores consultivos
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Técnicas avançadas de vendas:</strong> cross-selling, up-selling e tratamento de objeções
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Comunicação premium:</strong> linguagem corporal, tom de voz e rapport eficaz
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Mentoria contínua:</strong> acompanhamento de 3 meses para resultados duradouros
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Programa Completo</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-blue-700">Presencial - 8 horas</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mentalidade comercial e foco no cliente</li>
                    <li>• Técnicas de vendas consultivas</li>
                    <li>• Abordagem inicial e criação de rapport</li>
                    <li>• Apresentação estratégica dos serviços</li>
                    <li>• Tratamento de objeções comuns</li>
                    <li>• Encerramento da venda e follow-up</li>
                    <li>• Comunicação verbal e não verbal</li>
                    <li>• Postura premium alinhada ao SPA</li>
                  </ul>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h5 className="font-semibold text-indigo-700">Mentoria - 3 meses</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Encontros quinzenais personalizados</li>
                    <li>• Grupo privado para suporte</li>
                    <li>• Análise de indicadores de performance</li>
                    <li>• Ajustes de abordagem</li>
                    <li>• Planejamento de campanhas sazonais</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI e Benefícios Financeiros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Investimento que se Paga em 30 Dias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como empresas estão aumentando vendas e satisfação com nosso treinamento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Aumento nas Vendas</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Aumento de 150% no ticket médio</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Melhoria de 200% na conversão</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>ROI médio de 400% em 3 meses</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Satisfação do Cliente</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Aumento de 85% na satisfação geral</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Redução de 70% em reclamações</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>NPS melhorado de 45 para 78</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Vantagem Competitiva</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Diferencial no atendimento premium</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Maior fidelização de clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Reputação de excelência no mercado</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA Intermediário */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Não perca a oportunidade de liderar seu mercado</h3>
              <p className="text-lg mb-6">
                Enquanto você espera, seus concorrentes já estão treinando suas equipes e ganhando vantagem competitiva
              </p>
              <a
                href="/contato"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
              >
                🎯 Solicitar Orçamento Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O Facilitador */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Os Facilitadores
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Luciano Fernandes */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/time/luciano.png"
                      alt="Luciano Fernandes"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Luciano Fernandes
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    Especialista em Vendas e Desenvolvimento de Equipes
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    <strong>Profissional com 36 anos de experiência</strong> no mercado, tendo atuado em posições de destaque em grandes empresas como <strong>Nestlé, Bunge e Grupo Schincariol</strong>, sempre com foco na área comercial e no desenvolvimento de equipes de alta performance.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    <strong>Especialista em Visual Merchandising e Trade Marketing</strong>, é reconhecido por criar e implementar estratégias inovadoras que impulsionam a comercialização de produtos e serviços em diversos segmentos.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Expertise Principal:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Desenvolvimento de equipes de alta performance</li>
                      <li>• Estratégias comerciais inovadoras</li>
                      <li>• Visual Merchandising e Trade Marketing</li>
                      <li>• Gestão de vendas e relacionamento com clientes</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center mt-6">
                  <a
                    href="https://instagram.com/lucianofconsultor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Alexandre Guimarães */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <Image
                      src="/time/guimas.png"
                      alt="Alexandre Guimarães"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Alexandre Guimarães
                  </h3>
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    Head de Inovação e Digital
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-base leading-relaxed">
                    <strong>GUIMAS</strong> é uma figura proeminente no mundo da inovação e tecnologia. Como Head de Inovação e Digital, Consultor, Empreendedor e Palestrante, ele traz consigo uma vasta experiência e paixão pelo universo digital.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    Reconhecido por sua habilidade em ajudar empresas a navegar no cenário digital em constante evolução.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Expertise Principal:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Transformação digital e inovação</li>
                      <li>• Estratégias de tecnologia</li>
                      <li>• Consultoria em inovação</li>
                      <li>• Palestras e treinamentos</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center mt-6">
                  <a
                    href="https://aleguimas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg flex items-center justify-center hover:from-green-700 hover:to-teal-700 transition-all duration-200"
                    title="Site Oficial"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/alexandreguimaraes81/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/aleguimas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@aleguimas_palestrante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-200"
                    title="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Destaque da Experiência Combinada */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Experiência Combinada de Excelência</h3>
              <p className="text-lg mb-6">
                Juntos, Luciano Fernandes e Alexandre Guimarães trazem mais de <strong>50 anos de experiência</strong> em vendas, atendimento ao cliente, inovação e desenvolvimento de equipes de alta performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-3xl font-bold mb-2">36+</div>
                  <div>Anos de experiência em vendas e atendimento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div>Anos em inovação e transformação digital</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div>Equipes treinadas com sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso Reais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Empresas que já Transformaram seu Atendimento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rede de Farmácias - PE</h3>
              <p className="text-gray-600 mb-4">
                Treinamento completo da equipe de balcão e farmacêuticos para atendimento consultivo.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Aumento de 90% na satisfação</li>
                  <li>• Melhoria de 60% na fidelização</li>
                  <li>• Aumento de 40% no ticket médio</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>ROI:</strong> Aumento de R$ 25.000/mês em vendas
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Concessionária de Veículos - SP</h3>
              <p className="text-gray-600 mb-4">
                Capacitação de vendedores e equipe de pós-venda para atendimento premium.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Redução de 80% em reclamações</li>
                  <li>• Aumento de 40% nas vendas</li>
                  <li>• Melhoria de 150% na satisfação</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ROI:</strong> Aumento de 60% na conversão de leads
                </p>
              </div>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;O treinamento transformou completamente nossa equipe. Em 30 dias já estávamos vendo resultados nas vendas e na satisfação dos clientes.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Ricardo Santos, Fecomércio PE</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;ROI impressionante! O treinamento se pagou em 2 semanas com o aumento nas vendas e redução de reclamações.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Bruno Cruz, Prefeitura Jaboatão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pergunta Provocativa */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A questão não é mais se vamos treinar nossa equipe, mas por que{' '}
            <span className="text-blue-400">ainda não treinamos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enquanto você espera, seus concorrentes já estão treinando suas equipes e ganhando vantagem competitiva.
          </p>
          
          {/* Estatísticas de Urgência */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
              <div className="text-sm">dos clientes pagam mais por melhor atendimento</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-sm">mais chances de venda com atendimento premium</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-2">-70%</div>
              <div className="text-sm">nas reclamações com equipe treinada</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 transform hover:scale-105"
            >
              🚀 Agendar Treinamento Premium
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Atendimento ao Cliente Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              📞 Falar Agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual é a duração total do programa?
              </h3>
              <p className="text-gray-600">
                O programa completo inclui 8 horas de treinamento presencial intensivo, divididas em 2 encontros conforme sua disponibilidade, mais 3 meses de mentoria contínua com encontros quinzenais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O treinamento é personalizado para nosso setor?
              </h3>
              <p className="text-gray-600">
                Sim! Adaptamos todo o conteúdo para seu setor específico, incluindo exemplos práticos, casos de uso reais e terminologia do seu negócio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês atendem empresas em todo o Brasil?
              </h3>
              <p className="text-gray-600">
                Absolutamente! Oferecemos cobertura nacional, realizando treinamentos em sua empresa ou local escolhido em qualquer região do Brasil.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como funciona a mentoria de 3 meses?
              </h3>
              <p className="text-gray-600">
                A mentoria inclui encontros quinzenais personalizados, grupo privado para suporte, análise de indicadores de performance e ajustes de abordagem conforme necessidades identificadas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quais são os resultados esperados?
              </h3>
              <p className="text-gray-600">
                Resultados típicos incluem aumento de 150% no ticket médio, melhoria de 85% na satisfação do cliente, redução de 70% em reclamações e ROI médio de 400% em 3 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Pronto para Transformar seu Atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se às empresas que já estão transformando seus resultados. O Treinamento de Atendimento Premium é o primeiro passo para sua empresa se tornar referência em atendimento.
          </p>
          
          {/* Garantias e Benefícios */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">✅ Garantias da Simplí Digital</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold">🎯 Resultado Garantido</div>
                  <div className="opacity-90">Equipe transformada em 8 horas</div>
                </div>
                <div>
                  <div className="font-semibold">🌍 Cobertura Nacional</div>
                  <div className="opacity-90">Atendemos empresas em todo o Brasil</div>
                </div>
                <div>
                  <div className="font-semibold">💎 Qualidade Premium</div>
                  <div className="opacity-90">Facilitador com 20+ anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cobertura Regional */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">📍 Atendemos empresas em todo o Brasil</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm">
                <div>
                  <div className="font-semibold">🏙️ Sudeste</div>
                  <div className="opacity-90">SP, RJ, MG, ES</div>
                </div>
                <div>
                  <div className="font-semibold">🌅 Nordeste</div>
                  <div className="opacity-90">PE, BA, CE, RN</div>
                </div>
                <div>
                  <div className="font-semibold">🌲 Sul</div>
                  <div className="opacity-90">RS, SC, PR</div>
                </div>
                <div>
                  <div className="font-semibold">🌿 Centro-Oeste</div>
                  <div className="opacity-90">DF, GO, MT, MS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="/contato"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              🎯 Solicitar Proposta Comercial
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Atendimento ao Cliente Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              📞 Falar Diretamente
            </a>
          </div>
          

        </div>
      </section>
    </Layout>
  )
}

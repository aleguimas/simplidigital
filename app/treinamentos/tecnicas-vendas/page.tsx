import { Metadata } from 'next'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import { DOMAINS } from '../../../lib/domains'

export const metadata: Metadata = {
  title: 'Técnicas de Vendas | Treinamento In Company em Todo Brasil | Simplí Digital',
  description: 'Transforme sua equipe de vendas com treinamento intensivo de 8h + mentoria de 3 meses. Luciano Fernandes (36 anos de experiência). Aumente vendas em 150% e conversão em 80%. Atendemos empresas em todo o Brasil.',
  keywords: 'treinamento técnicas vendas, Luciano Fernandes, vendas consultivas, psicologia vendas, prospecção clientes, fechamento vendas, negociação vendas, cross-selling, up-selling, follow-up vendas, fidelização clientes, comunicação vendas, rapport vendas, objeções vendas, ticket médio, taxa conversão, ciclo vendas, vendas digitais, CRM vendas, treinamento in company, vendas empresariais, equipe vendas, visual merchandising, trade marketing, Nestlé, Bunge, Grupo Schincariol, treinamento vendas São Paulo, treinamento vendas Rio de Janeiro, treinamento vendas Brasília, treinamento vendas Recife, treinamento vendas Belo Horizonte, treinamento vendas Porto Alegre, treinamento vendas Salvador, treinamento vendas Fortaleza, treinamento vendas Curitiba, treinamento vendas Manaus',
  openGraph: {
    title: 'Técnicas de Vendas | Simplí Digital - Todo Brasil',
    description: 'Treinamento intensivo de 8h + mentoria de 3 meses para transformar sua equipe de vendas. Luciano Fernandes (36 anos de experiência). Atendemos empresas em todo o território nacional.',
    url: 'https://simplidigital.com.br/treinamentos/tecnicas-vendas',
    siteName: 'Simplí Digital',
    images: [
      {
        url: 'https://simplidigital.com.br/images/consulting-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Técnicas de Vendas Premium - Simplí Digital - Cobertura Nacional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://simplidigital.com.br/treinamentos/tecnicas-vendas',
    languages: {
      'pt-BR': 'https://simplidigital.com.br/treinamentos/tecnicas-vendas',
      'en-US': 'https://simplidigital.com.br/en/trainings/sales-techniques',
      'es-ES': 'https://simplidigital.com.br/es/entrenamientos/tecnicas-ventas',
      'pt-BR-IA': 'https://www.simpli.ia.br/treinamentos/tecnicas-vendas',
    },
  },
}

export default function TecnicasVendasPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Técnicas de Vendas
            </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto px-4">
            Transforme sua equipe de vendas com treinamento intensivo de 8h + mentoria de 3 meses
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
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🚀 Solicitar Proposta Comercial
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Técnicas de Vendas Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-200"
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
              Sobre o Treinamento de Técnicas de Vendas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Capacite sua equipe para desenvolver uma postura comercial consultiva, estratégica e orientada a resultados
            </p>
          </div>

          {/* Cobertura Nacional */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Cobertura Nacional</h3>
              <p className="text-base md:text-lg mb-4 px-2">
                Nossos treinamentos são realizados em <strong>todo o Brasil</strong>, 
                levando excelência em vendas para empresas de Norte a Sul.
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
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Postura comercial consultiva:</strong> vender é resolver problemas
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Comunicação estratégica:</strong> rapport, empatia e perguntas eficazes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Apresentação persuasiva:</strong> cross-selling, up-selling e diferenciais
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Negociação e fechamento:</strong> tratamento de objeções e follow-up
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Programa Completo</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-green-700">Módulo 1 - Introdução às Técnicas de Vendas (2h)</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Papel estratégico da equipe de vendas</li>
                    <li>• A mentalidade consultiva: vender é resolver problemas</li>
                    <li>• Perfil e jornada do cliente</li>
                  </ul>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <h5 className="font-semibold text-emerald-700">Módulo 2 - Comunicação e Abordagem (2h)</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Técnicas de comunicação verbal e não verbal</li>
                    <li>• Criação de rapport e empatia</li>
                    <li>• Perguntas estratégicas para identificar necessidades</li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h5 className="font-semibold text-teal-700">Módulo 3 - Apresentação de Produtos (2h)</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Como destacar benefícios e diferenciais</li>
                    <li>• Técnicas de cross-selling e up-selling</li>
                    <li>• Estrutura de apresentação clara e persuasiva</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h5 className="font-semibold text-green-600">Módulo 4 - Negociação e Fechamento (2h)</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Tratamento de objeções comuns</li>
                    <li>• Estratégias para lidar com clientes exigentes</li>
                    <li>• Técnicas de fechamento e follow-up</li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <h5 className="font-semibold text-teal-600">Mentoria - 3 meses</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Encontros quinzenais online ou presenciais</li>
                    <li>• Análise de indicadores de desempenho</li>
                    <li>• Feedback individual e coletivo</li>
                    <li>• Suporte para dúvidas e ajustes</li>
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
              Veja como empresas estão aumentando vendas e conversão com nosso treinamento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Aumento nas Vendas</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Aumento de 150% no volume de vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Melhoria de 80% na taxa de conversão</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>ROI médio de 400% em 3 meses</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Eficiência Operacional</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Redução de 50% no ciclo de vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Aumento de 200% na produtividade</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Melhoria de 300% na qualificação de leads</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Vantagem Competitiva</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Equipe com mentalidade consultiva</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Maior fidelização de clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Diferencial no mercado</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA Intermediário */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Não perca a oportunidade de liderar seu mercado</h3>
              <p className="text-lg mb-6">
                Enquanto você espera, seus concorrentes já estão treinando suas equipes e ganhando vantagem competitiva
              </p>
              <a
                href="/contato"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
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
              O Facilitador
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Luciano Fernandes
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Especialista em Vendas e Desenvolvimento de Equipes</strong> com 36 anos de experiência no mercado, tendo atuado em posições de destaque em grandes empresas como <strong>Nestlé, Bunge e Grupo Schincariol</strong>.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Sempre com foco na área comercial e no desenvolvimento de equipes de alta performance, é reconhecido por criar e implementar estratégias inovadoras que impulsionam a comercialização de produtos e serviços.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Especialista em Visual Merchandising e Trade Marketing</strong>, com vasta experiência em diferentes segmentos e mercados.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-800 mb-2">Expertise em Vendas:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Técnicas de vendas consultivas</li>
                    <li>• Desenvolvimento de equipes de alta performance</li>
                    <li>• Estratégias comerciais inovadoras</li>
                    <li>• Visual Merchandising e Trade Marketing</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                  <Image
                    src="/time/luciano.png"
                    alt="Luciano Fernandes"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-lg text-gray-600 mt-4 font-semibold">
                  36 anos de experiência em vendas
                </p>
                
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
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso Reais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Empresas que já Transformaram suas Vendas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Indústria Alimentícia - SP</h3>
              <p className="text-gray-600 mb-4">
                Treinamento completo da equipe de vendas para abordagem consultiva e técnicas de negociação.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Aumento de 180% no volume de vendas</li>
                  <li>• Melhoria de 90% na taxa de conversão</li>
                  <li>• Redução de 60% no ciclo de vendas</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>ROI:</strong> Aumento de R$ 150.000/mês em vendas
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Varejo de Moda - RJ</h3>
              <p className="text-gray-600 mb-4">
                Capacitação da equipe de vendas em técnicas de apresentação e fechamento.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Aumento de 120% no ticket médio</li>
                  <li>• Melhoria de 75% na conversão</li>
                  <li>• Maior fidelização de clientes</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ROI:</strong> Aumento de 85% na lucratividade
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
                    &ldquo;O treinamento transformou completamente nossa equipe de vendas. Em 30 dias já estávamos vendo resultados expressivos no volume e na conversão.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Ricardo Santos, Fecomércio PE</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;ROI impressionante! O treinamento se pagou em 2 semanas com o aumento nas vendas e melhoria na eficiência da equipe.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Bruno Cruz, Prefeitura Jaboatão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pergunta Provocativa */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A questão não é mais se vamos treinar nossa equipe de vendas, mas por que{' '}
            <span className="text-green-400">ainda não treinamos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enquanto você espera, seus concorrentes já estão treinando suas equipes e ganhando vantagem competitiva.
          </p>
          
          {/* Estatísticas de Urgência */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400 mb-2">150%</div>
              <div className="text-sm">de aumento nas vendas com equipe treinada</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-sm">de melhoria na taxa de conversão</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-2">-50%</div>
              <div className="text-sm">no ciclo de vendas</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              🚀 Agendar Treinamento de Vendas
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Técnicas de Vendas Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-200"
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
                O programa completo inclui 8 horas de treinamento presencial intensivo, divididas em 4 módulos de 2 horas cada, mais 3 meses de mentoria contínua com encontros quinzenais.
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
                A mentoria inclui encontros quinzenais personalizados, análise de indicadores de performance, feedback individual e coletivo, e suporte para dúvidas e ajustes de abordagem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quais são os resultados esperados?
              </h3>
              <p className="text-gray-600">
                Resultados típicos incluem aumento de 150% no volume de vendas, melhoria de 80% na taxa de conversão, redução de 50% no ciclo de vendas e ROI médio de 400% em 3 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Pronto para Transformar suas Vendas?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se às empresas que já estão transformando seus resultados. O Treinamento de Técnicas de Vendas Premium é o primeiro passo para sua empresa se tornar referência em vendas.
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
                  <div className="opacity-90">Facilitador com 36 anos de experiência</div>
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
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              🎯 Solicitar Proposta Comercial
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no treinamento de Técnicas de Vendas Premium. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              📞 Falar Diretamente
            </a>
          </div>
          

        </div>
      </section>
    </Layout>
  )
}

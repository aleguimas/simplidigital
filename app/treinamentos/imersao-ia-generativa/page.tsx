
import { Metadata } from 'next'
import Layout from '../../../components/Layout'
import { DOMAINS } from '../../../lib/domains'

export const metadata: Metadata = {
  title: 'Imersão de IA para Negócios | Treinamento In Company em Todo Brasil | Simplí Digital',
  description: 'Transforme desafios em oportunidades com nosso workshop intensivo de IA para negócios. 8h presencial + 2h online. Alexandre Guimarães (Guimas). Atendemos empresas em todo o Brasil.',
  keywords: 'treinamento IA, inteligência artificial, workshop IA, imersão IA, IA para negócios, ChatGPT, automação IA, consultoria IA, treinamento in company, treinamento IA Brasil, workshop inteligência artificial São Paulo, treinamento IA Rio de Janeiro, curso IA Brasília, treinamento IA Recife, workshop IA Belo Horizonte, treinamento IA Porto Alegre, curso inteligência artificial Salvador, treinamento IA Fortaleza, workshop IA Curitiba, treinamento IA Manaus',
  openGraph: {
    title: 'Imersão de IA para Negócios | Simplí Digital - Todo Brasil',
    description: 'Workshop intensivo de 10 horas para transformar sua empresa com IA. Alexandre Guimarães (Guimas). Atendemos empresas em todo o território nacional.',
    url: `${DOMAINS.IA}/treinamentos/imersao-ia-generativa`,
    siteName: 'Simplí Digital',
    images: [
      {
        url: 'https://simplidigital.com.br/images/agentes-ia-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Imersão de IA para Negócios - Simplí Digital - Cobertura Nacional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: `${DOMAINS.IA}/treinamentos/imersao-ia-generativa`,
    languages: {
      'pt-BR': `${DOMAINS.PRIMARY}/treinamentos/imersao-ia-generativa`,
      'en-US': `${DOMAINS.PRIMARY}/en/trainings/ai-immersion`,
      'es-ES': `${DOMAINS.PRIMARY}/es/entrenamientos/inmersion-ia`,
      'pt-BR-IA': `${DOMAINS.IA}/treinamentos/imersao-ia-generativa`,
    },
  },
}

export default function ImersaoIAPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Imersão de IA para Negócios
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto px-4">
            Transforme desafios em oportunidades com um workshop intensivo de 10 horas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Duração</span>
              <div className="text-lg md:text-2xl font-bold">10 horas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Formato</span>
              <div className="text-lg md:text-2xl font-bold">Presencial + Online</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 md:px-6 py-3">
              <span className="text-xs md:text-sm opacity-90">Facilitador</span>
              <div className="text-lg md:text-2xl font-bold">Alexandre Guimarães</div>
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
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no workshop de Imersão de IA para Negócios. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
            >
              📞 Falar Diretamente
            </a>
          </div>
          

        </div>
      </section>

      {/* Sobre a Imersão */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a Imersão em IA
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transforme desafios em oportunidades com um workshop intensivo de 10 horas
            </p>
          </div>

          {/* Cobertura Nacional */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 md:p-8 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-4">🌍</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Cobertura Nacional</h3>
              <p className="text-base md:text-lg mb-4 px-2">
                Nossos treinamentos são realizados em <strong>todo o Brasil</strong>, 
                levando conhecimento e inovação para empresas de Norte a Sul.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm">
                <div>
                  <div className="font-semibold">📍 Presencial</div>
                  <div className="text-sm">Em sua empresa ou local escolhido</div>
                </div>
                <div>
                  <div className="font-semibold">🌐 Online</div>
                  <div className="text-sm">Mentoria e acompanhamento remoto</div>
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
                    <strong>Desvendar o real poder da IA:</strong> entenda conceitos e tecnologias
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Mapear tendências e cenários:</strong> saiba para onde o mercado caminha e como sua empresa pode sair à frente
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Identificar problemas estratégicos:</strong> encontre oportunidades internas para aplicar a IA de forma prática
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span className="text-gray-700">
                    <strong>Desenvolver um plano de ação inicial:</strong> crie soluções que você poderá testar no seu negócio
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Programa Completo</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-semibold text-purple-700">Presencial - 8 horas</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• História da I.A</li>
                    <li>• O que é?</li>
                    <li>• Princípios Fundamentais e Tipos de I.A</li>
                    <li>• Conceitos Essenciais</li>
                    <li>• Letramento da I.A</li>
                    <li>• Mão na massa</li>
                    <li>• Levantar Oportunidades estratégicas</li>
                    <li>• Dicas e Melhores Práticas</li>
                    <li>• Como implantar a I.A no seu negócio</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-semibold text-blue-700">Online - 2 horas</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Mentoria para validação e acompanhamento</li>
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
              Veja como empresas estão economizando milhares de reais e aumentando a produtividade com IA
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Economia Imediata</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Redução de 60% no tempo de tarefas repetitivas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Economia de 40% em processos manuais</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>ROI médio de 300% em 3 meses</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Produtividade</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Aumento de 200% na velocidade de criação de conteúdo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Redução de 80% no tempo de análise de dados</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Equipe 3x mais eficiente em tarefas estratégicas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Vantagem Competitiva</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Primeira empresa do setor com IA implementada</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Diferencial tecnológico para clientes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                  <span>Atração e retenção de talentos</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA Intermediário */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Não perca a oportunidade de liderar seu mercado</h3>
              <p className="text-lg mb-6">
                Enquanto você espera, seus concorrentes já estão implementando IA e ganhando vantagem competitiva
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              O Facilitador
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Alexandre Guimarães
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>GUIMAS</strong>, é uma figura proeminente no mundo da inovação e tecnologia. Como Head de Inovação e Digital, Consultor, Empreendedor e Palestrante, ele traz consigo uma vasta experiência e paixão pelo universo digital.
                </p>
                <p className="text-gray-600 mb-6">
                  Reconhecido por sua habilidade em ajudar empresas a navegar no cenário digital em constante evolução.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>GUIMAS</strong> também ocupou posições de destaque como Head de TI e Inovação na Farmácia Rosário - SP e Head de Inovação no Mundo do Cabeleireiro.
                </p>
                
                                 <div className="flex gap-4 justify-center md:justify-start">
                   <a
                     href="https://www.aleguimas.com.br/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg flex items-center justify-center hover:from-green-700 hover:to-teal-700 transition-all duration-200"
                     title="Site Oficial"
                   >
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                     </svg>
                   </a>
                   <a
                     href="https://www.instagram.com/aleguimas"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                     title="@aleguimas"
                   >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                     </svg>
                   </a>
                   <a
                     href="https://www.linkedin.com/in/alexandreguimaraes81/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200"
                     title="LinkedIn"
                   >
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.554V9h3.337v1.93h.046c.882-1.64 2.037-2.203 3.494-2.203 3.71 0 4.297 2.491 4.297 5.725v5.001zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                     </svg>
                   </a>
                 </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Experiência Profissional</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-700">Head de Inovação e Digital</h5>
                    <p className="text-sm text-gray-600">Simplí Inovação Digital</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-700">Head de TI e Inovação</h5>
                    <p className="text-sm text-gray-600">Farmácia Rosário - SP</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-semibold text-green-700">Head de Inovação</h5>
                    <p className="text-sm text-gray-600">Mundo do Cabeleireiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso Reais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Empresas que já Transformaram seus Negócios
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Usina Trapiche - PE</h3>
              <p className="text-gray-600 mb-4">
                Imersão junto ao time de tecnologia, buscando otimizar processos internos.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Identificação de processos para automação com IA</li>
                  <li>• Mapeamento de oportunidades de otimização</li>
                  <li>• Plano de implementação de soluções IA</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>ROI:</strong> Economia estimada de R$ 50.000/ano em processos manuais
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grupo Supera - SP</h3>
              <p className="text-gray-600 mb-4">
                Imersão junto ao time de CS e Comercial buscando levantar novas oportunidades de projetos.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Resultados Alcançados:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Novas oportunidades de projetos identificadas</li>
                  <li>• Estratégias de IA para CS e Comercial</li>
                  <li>• Roadmap de implementação de IA</li>
                </ul>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>ROI:</strong> Aumento de 150% em leads qualificados
                </p>
              </div>
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que nossos clientes dizem</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;A Imersão de IA transformou completamente nossa visão sobre tecnologia. Em 30 dias já estávamos implementando as primeiras soluções.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Ricardo Santos, Fecomércio PE</p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-3">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                    <span className="ml-2 text-sm text-gray-600">5.0/5.0</span>
                  </div>
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;ROI impressionante! O treinamento se pagou em 2 semanas com as otimizações que implementamos.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-gray-900">- Bruno Cruz, Prefeitura Jaboatão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pergunta Provocativa */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A questão não é mais se vamos utilizar a IA na empresa, mas por que{' '}
            <span className="text-green-400">ainda não utilizamos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enquanto você espera, seus concorrentes já estão implementando soluções de IA e ganhando vantagem competitiva.
          </p>
          
          {/* Estatísticas de Urgência */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-green-400 mb-2">73%</div>
              <div className="text-sm">das empresas já usam IA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2x</div>
              <div className="text-sm">mais produtivas com IA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-red-400 mb-2">-40%</div>
              <div className="text-sm">nos custos operacionais</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
            >
              🚀 Agendar Imersão de IA
            </a>
            <a
              href="tel:+5581999999999"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-200"
            >
              📞 Falar Agora
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Para quem é indicado este treinamento?
              </h3>
              <p className="text-gray-600">
                Líderes, gestores, profissionais de TI e inovação, e qualquer pessoa interessada em entender como aplicar IA em seus negócios. Não é necessário conhecimento prévio em programação.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                O que está incluído no treinamento?
              </h3>
              <p className="text-gray-600">
                8 horas de workshop presencial prático, 2 horas de mentoria online para acompanhamento, material didático, certificado e acesso a comunidade exclusiva de alunos.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Posso aplicar o conhecimento imediatamente?
              </h3>
              <p className="text-gray-600">
                Sim! O foco é 100% prático. Você sairá com um plano de ação concreto e soluções que pode testar no seu negócio desde o primeiro dia.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                O treinamento é personalizado para minha empresa?
              </h3>
              <p className="text-gray-600">
                Sim! Durante o workshop, trabalhamos com casos reais da sua empresa, identificando oportunidades específicas e criando soluções personalizadas.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vocês atendem empresas em todo o Brasil?
              </h3>
              <p className="text-gray-600">
                Absolutamente! Realizamos treinamentos em todo o território nacional. Para locais mais distantes, oferecemos opções híbridas com parte presencial e parte online, garantindo a mesma qualidade e resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Pronto para Liderar seu Mercado com IA?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se às empresas que já estão transformando seus resultados. A Imersão de IA para Negócios é o primeiro passo para sua empresa se tornar referência em inovação.
          </p>
          
          {/* Garantias e Benefícios */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">✅ Garantias da Simplí Digital</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold">🎯 Resultado Garantido</div>
                  <div className="opacity-90">Plano de ação concreto em 10 horas</div>
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
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              🎯 Solicitar Proposta Comercial
            </a>
            <a
              href="https://wa.me/5581991942628?text=Olá! Tenho interesse no workshop de Imersão de IA para Negócios. Gostaria de saber mais sobre preços e disponibilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              📞 Falar Diretamente
            </a>
          </div>
          

        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Imersão de IA para Negócios",
            "description": "Workshop intensivo de 10 horas para transformar desafios em oportunidades com inteligência artificial. Alexandre Guimarães (Guimas).",
            "provider": {
              "@type": "Organization",
              "name": "Simplí Inovação Digital",
              "url": "https://simplidigital.com.br"
            },
            "instructor": {
              "@type": "Person",
              "name": "Alexandre Guimarães",
              "alternateName": "Guimas",
              "jobTitle": "Head de Inovação e Digital",
              "worksFor": {
                "@type": "Organization",
                "name": "Simplí Inovação Digital"
              }
            },
            "courseMode": "blended",
            "educationalLevel": "intermediate",
            "timeRequired": "PT10H",
            "coursePrerequisites": "Não é necessário conhecimento prévio em programação",
            "teaches": [
              "Inteligência Artificial para Negócios",
              "Conceitos e Tecnologias de IA",
              "Implementação de IA em Empresas",
              "ChatGPT e Ferramentas de IA",
              "Automação com IA"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "BRL",
              "description": "Solicite orçamento personalizado para sua empresa"
            },
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressRegion": "Todo Brasil",
                "description": "Atendemos empresas em todo o território nacional"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "Brasil",
              "description": "Cobertura nacional para treinamentos in company"
            },
            "availableLanguage": "pt-BR",
            "audience": {
              "@type": "Audience",
              "audienceType": "Empresas brasileiras",
              "geographicArea": "Todo o Brasil"
            }
          })
        }}
      />
    </Layout>
  )
}

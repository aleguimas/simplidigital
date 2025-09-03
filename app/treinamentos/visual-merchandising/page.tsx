import { Metadata } from 'next';
import Layout from '@/components/Layout';
import FacilitatorCard from '@/components/FacilitatorCard';

export const metadata: Metadata = {
  title: 'Visual Merchandising | Treinamento In Company | Simplí Digital',
  description: 'Transforme seu ponto de venda com nosso treinamento de Visual Merchandising. Aumente o ticket médio e crie experiências que encantam o cliente. Cobertura nacional. Solicite orçamento!',
  keywords: [
    'treinamento visual merchandising',
    'curso visual merchandising',
    'organização ponto de venda',
    'exposição produtos',
    'layout loja',
    'experiência cliente',
    'treinamento in company',
    'merchandising visual',
    'ponto de venda',
    'simplí digital',
    'luciano fernandes'
  ],
  openGraph: {
    title: 'Visual Merchandising | Treinamento In Company | Simplí Digital',
    description: 'Transforme seu ponto de venda com técnicas avançadas de Visual Merchandising. Aumente vendas e crie experiências memoráveis.',
    images: ['/images/visual-merchandising-hero.jpg'],
  },
  alternates: {
    canonical: '/treinamentos/visual-merchandising',
  },
};

export default function VisualMerchandisingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-simpli text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
                          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                🎨 Treinamento Especializado
              </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Visual Merchandising
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Transforme seu ponto de venda em uma experiência que encanta e vende
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⏱️</div>
              <div className="text-sm font-medium">8 Horas</div>
              <div className="text-xs opacity-80">Treinamento</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm font-medium">Presencial</div>
              <div className="text-xs opacity-80">ou Online</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm font-medium">3 Meses</div>
              <div className="text-xs opacity-80">Mentoria</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm font-medium">Nacional</div>
              <div className="text-xs opacity-80">Cobertura</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/81991942628?text=Olá! Gostaria de saber mais sobre o treinamento de Visual Merchandising da Simplí Digital. Pode me enviar mais informações e valores?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Falar Diretamente
            </a>
            <a
              href="#contato"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-simpli-green transition duration-300 transform hover:scale-105 inline-block text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Sobre o Treinamento */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre o Treinamento
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-simpli-green mb-4">
                  O que você vai conquistar:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-simpli-green rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    <span>Padronização e atratividade no ponto de venda</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-simpli-green rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    <span>Aumento do ticket médio por meio da correta exposição dos produtos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-simpli-green rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    <span>Melhor aproveitamento dos espaços físicos e digitais</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-simpli-green rounded-full flex-shrink-0 mt-2 mr-3"></div>
                    <span>Criação de ambientes que transmitam a identidade e os valores da marca</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-simpli-green mb-4">
                  Programa Completo:
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-simpli-green mb-2">4</div>
                      <div className="text-sm text-gray-600">Módulos</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-simpli-teal mb-2">8h</div>
                      <div className="text-sm text-gray-600">Treinamento</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-simpli-green mb-2">3</div>
                      <div className="text-sm text-gray-600">Meses Mentoria</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-simpli-teal mb-2">100%</div>
                      <div className="text-sm text-gray-600">Prático</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-simpli-green/10 to-simpli-teal/10 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-simpli rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Transforme seu PDV
                </h3>
                <p className="text-gray-600 mb-6">
                  Aprenda técnicas avançadas de Visual Merchandising para criar experiências que encantam o cliente e impulsionam as vendas
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>🎨 Layout Estratégico</span>
                    <span className="text-simpli-green">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>💡 Exposição Inteligente</span>
                    <span className="text-simpli-green">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>🌟 Experiência Exclusiva</span>
                    <span className="text-simpli-green">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI e Benefícios Financeiros */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ROI e Benefícios Financeiros
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Investir em Visual Merchandising gera retornos comprovados e mensuráveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">25%</h3>
              <p className="text-gray-600">Aumento no ticket médio</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">40%</h3>
              <p className="text-gray-600">Melhoria na conversão</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">60%</h3>
              <p className="text-gray-600">Aproveitamento do espaço</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">35%</h3>
              <p className="text-gray-600">Tempo de permanência</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Facilitador */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Facilitador
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça o especialista que vai transformar sua equipe
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FacilitatorCard
              name="Luciano Fernandes"
              title="Especialista em Visual Merchandising e Trade Marketing"
              description="Profissional com 36 anos de experiência no mercado, tendo atuado em posições de destaque em grandes empresas como Nestlé, Bunge e Grupo Schincariol, sempre com foco na área comercial e no desenvolvimento de equipes de alta performance."
              imagePath="/time/luciano.png"
              expertise={[
                "Visual Merchandising Estratégico",
                "Trade Marketing e Promoções",
                "Layout de Ponto de Venda",
                "Experiência do Cliente",
                "Gestão de Equipes Comerciais"
              ]}
              socialLinks={[
                {
                  platform: "Instagram",
                  url: "https://www.instagram.com/lucianofernandes",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                    </svg>
                  ),
                  color: "text-pink-500"
                }
              ]}
              gradientColors="from-blue-500 to-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* Casos de Uso Reais */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso Reais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como o Visual Merchandising transformou negócios reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rede de Farmácias</h3>
              <p className="text-gray-600 mb-3">Reorganização completa do layout com foco em produtos de maior margem</p>
              <div className="text-2xl font-bold text-green-600">+45% Ticket Médio</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Loja de Roupas</h3>
              <p className="text-gray-600 mb-3">Implementação de vitrines estratégicas e exposição por coleções</p>
              <div className="text-2xl font-bold text-blue-600">+60% Conversão</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Supermercado</h3>
              <p className="text-gray-600 mb-3">Redesign das gôndolas e posicionamento estratégico de produtos</p>
              <div className="text-2xl font-bold text-purple-600">+35% Vendas</div>
            </div>
          </div>

          {/* Depoimentos */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Depoimentos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  &ldquo;O treinamento transformou completamente nossa forma de organizar a loja. Os resultados foram impressionantes!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-simpli rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Silva</div>
                    <div className="text-sm text-gray-600">Gerente de Loja - Rede de Farmácias</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  &ldquo;A mentoria contínua fez toda a diferença. Conseguimos implementar as técnicas gradualmente e os resultados apareceram rapidamente.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-simpli rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Carlos Santos</div>
                    <div className="text-sm text-gray-600">Diretor Comercial - Loja de Roupas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pergunta Provocativa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seu ponto de venda está perdendo dinheiro?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              <strong>70% das decisões de compra são tomadas no ponto de venda.</strong> Se você não está aplicando técnicas de Visual Merchandising, está deixando dinheiro na mesa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/81991942628?text=Olá! Gostaria de saber mais sobre o treinamento de Visual Merchandising da Simplí Digital. Pode me enviar mais informações e valores?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-simpli text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
              >
                Falar Diretamente
              </a>
              <a
                href="#contato"
                className="border-2 border-simpli-green text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-simpli-green hover:text-white transition duration-300 transform hover:scale-105 inline-block text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o treinamento
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O treinamento é presencial ou online?
              </h3>
              <p className="text-gray-600">
                Oferecemos ambas as modalidades. O treinamento presencial é ideal para equipes maiores, enquanto o online é perfeito para equipes distribuídas geograficamente.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como funciona a mentoria de 3 meses?
              </h3>
              <p className="text-gray-600">
                A mentoria inclui encontros quinzenais para acompanhar a implementação, análise de layout, feedback contínuo e suporte para campanhas sazonais.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O treinamento é adequado para qualquer tipo de loja?
              </h3>
              <p className="text-gray-600">
                Sim! As técnicas são adaptáveis para qualquer segmento: varejo, farmácias, supermercados, lojas de roupas, etc. Personalizamos o conteúdo para sua realidade.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quanto tempo leva para ver resultados?
              </h3>
              <p className="text-gray-600">
                Os primeiros resultados aparecem em 2-4 semanas após a implementação. Com a mentoria contínua, os resultados se consolidam e melhoram ao longo dos 3 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-simpli text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu ponto de venda hoje mesmo!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se às centenas de empresas que já transformaram seus resultados com nossas técnicas de Visual Merchandising
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Resultados Comprovados</h3>
              <p className="text-sm opacity-90">Aumento médio de 25% no ticket</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-lg font-semibold mb-2">Especialista Experiente</h3>
              <p className="text-sm opacity-90">36 anos no mercado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Cobertura Nacional</h3>
              <p className="text-sm opacity-90">Atendemos todo o Brasil</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/81991942628?text=Olá! Gostaria de solicitar um orçamento para o treinamento de Visual Merchandising da Simplí Digital. Pode me ajudar?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-simpli-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Falar Diretamente
            </a>
            <a
              href="#contato"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-simpli-green transition duration-300 transform hover:scale-105 inline-block text-center"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos transformar seu ponto de venda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Informações do Treinamento
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-simpli-green rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">8 horas de treinamento intensivo</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-simpli-green rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">3 meses de mentoria contínua</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-simpli-green rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Material didático completo</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-simpli-green rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Certificado de conclusão</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Entre em Contato
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/81991942628?text=Olá! Gostaria de solicitar um orçamento para o treinamento de Visual Merchandising da Simplí Digital. Pode me ajudar?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
                      </svg>
                      Solicitar via WhatsApp
                    </a>
                    
                    <a
                      href="/contato"
                      className="flex items-center justify-center w-full bg-simpli-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Enviar Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

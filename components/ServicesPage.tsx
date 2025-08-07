'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { BiCodeBlock, BiBrain, BiBarChart, BiShowAlt } from 'react-icons/bi';

const ServicesPage = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criamos sites e aplicações web modernas, responsivas e otimizadas para SEO.',
      icon: BiCodeBlock,
      href: '/servicos/desenvolvimento-web',
      iconBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      features: ['Sites responsivos', 'Aplicações web', 'E-commerce', 'Sistemas personalizados']
    },
    {
      title: 'Agentes de IA',
      description: 'Desenvolvemos chatbots inteligentes e automações que revolucionam o atendimento.',
      icon: BiBrain,
      href: '/servicos/agentes-ia',
      iconBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
      features: ['Chatbots inteligentes', 'Automação de processos', 'Análise de dados', 'Integração com APIs']
    },
    {
      title: 'Tráfego Pago',
      description: 'Gerenciamos campanhas de marketing digital para maximizar seu ROI.',
      icon: BiBarChart,
      href: '/servicos/trafego-pago',
      iconBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Remarketing']
    },
    {
      title: 'Consultoria Digital',
      description: 'Estratégia completa de transformação digital para sua empresa.',
      icon: BiShowAlt,
      href: '/servicos/consultoria-digital',
      iconBg: 'bg-gradient-to-br from-orange-400 to-red-500',
      features: ['Estratégia digital', 'Transformação de processos', 'Análise de mercado', 'Roadmap tecnológico']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-simpli-green/5 via-white to-simpli-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-simpli-teal">Serviços</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Soluções completas em transformação digital para impulsionar seu negócio
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-simpli text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-simpli-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 text-simpli-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer no mundo digital.
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #7ACC00, #00B8B0)',
              color: 'white'
            }}
          >
            Fale Conosco
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <div ref={contactRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solicite um Orçamento
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                placeholder="Nome da sua empresa"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Serviço de Interesse
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
              >
                <option value="">Selecione um serviço</option>
                <option value="desenvolvimento-web">Desenvolvimento Web</option>
                <option value="agentes-ia">Agentes de IA</option>
                <option value="trafego-pago">Tráfego Pago</option>
                <option value="consultoria-digital">Consultoria Digital</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                placeholder="Conte-nos sobre seu projeto..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-simpli text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

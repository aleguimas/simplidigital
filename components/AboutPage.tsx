'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const AboutPage = () => {
  const { t } = useTranslation('common');
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <>
      {/* Banner */}
      <section className="bg-gradient-simpli text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('pages.about.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {t('pages.about.description')}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.about.mission.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.about.mission.description')}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.about.vision.title')}</h2>
              <p className="text-lg text-gray-600">
                {t('pages.about.vision.description')}
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">{t('pages.about.values.title')}</h2>
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

      {/* Empresas que Confiam */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empresas que Confiam
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Parceiros que escolheram a Simplí para impulsionar sua transformação digital.
            </p>
          </div>

                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-mirroah.webp"
                 alt="Mirroah"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-natal-home-center.webp"
                 alt="Natal Home Center"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-sebrae.webp"
                 alt="SEBRAE"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-prefeitura-jaboatao.webp"
                 alt="Prefeitura de Jaboatão"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-senac.webp"
                 alt="SENAC"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-liner.webp"
                 alt="Liner"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-fecomercio-pe.webp"
                 alt="FECOMÉRCIO PE"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-broomer.webp"
                 alt="Broomer"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-bluk.webp"
                 alt="Bluk"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-plaza.webp"
                 alt="Plaza"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
               <Image
                 src="/clients/logo-tacaruna.webp"
                 alt="Tacaruna"
                 width={240}
                 height={120}
                 className="h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300"
               />
             </div>
           </div>
        </div>
      </section>

      {/* Os Estrategistas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça os especialistas que transformam ideias em soluções inovadoras.
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {/* Guimas */}
             <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-32 h-32 bg-gradient-to-br from-simpli-green to-simpli-teal rounded-full flex items-center justify-center mx-auto mb-6">
                 <Image
                   src="/time/guimas.png"
                   alt="Alexandre Guimarães"
                   width={128}
                   height={128}
                   className="w-full h-full object-cover rounded-full"
                 />
               </div>
                               <h3 className="text-2xl font-bold text-gray-900 mb-2">Alexandre Guimarães</h3>
                <p className="text-simpli-teal font-semibold mb-4">O Estrategista</p>
               <p className="text-gray-600 mb-4">
                 Transformação Digital e Inteligência Artificial com 20+ anos de gestão corporativa.
               </p>
               <div className="flex justify-center space-x-4">
                 <a href="https://aleguimas.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                   </svg>
                 </a>
                 <a href="https://instagram.com/aleguimas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </a>
                 <a href="https://linkedin.com/in/alexandreguimaraes81/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                   </svg>
                 </a>
                 <a href="https://youtube.com/@aleguimas_palestrante" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                   </svg>
                 </a>
               </div>
             </div>

                         {/* Luciano */}
             <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
               <div className="w-32 h-32 bg-gradient-to-br from-simpli-green to-simpli-teal rounded-full flex items-center justify-center mx-auto mb-6">
                 <Image
                   src="/time/luciano.png"
                   alt="Luciano Fernandes"
                   width={128}
                   height={128}
                   className="w-full h-full object-cover rounded-full"
                 />
               </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">Luciano Fernandes</h3>
                <p className="text-simpli-teal font-semibold mb-4">O Professor</p>
               <p className="text-gray-600 mb-4">
                 Visual Merchandising e Trade Marketing com 35+ anos de experiência no mercado.
               </p>
               <div className="flex justify-center space-x-4">
                 <a href="https://instagram.com/lucianofconsultor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </a>
               </div>
             </div>

                                                   {/* Rodlemos */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-32 h-32 bg-gradient-to-br from-simpli-green to-simpli-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Image
                    src="/time/rodlemos.png"
                    alt="Rodrigo Lemos"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                               <h3 className="text-2xl font-bold text-gray-900 mb-2">Rodrigo Lemos</h3>
                 <p className="text-simpli-teal font-semibold mb-4">O Tráfego</p>
                <p className="text-gray-600 mb-4">
                  Tráfego Pago e Marketing Digital, focado em estratégias para aumentar o faturamento.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://rodlemosgestor.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com/rodrigolemosgestor" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

                                                     {/* Caio Souza */}
               <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                 <div className="w-32 h-32 bg-gradient-to-br from-simpli-green to-simpli-teal rounded-full flex items-center justify-center mx-auto mb-6">
                   <Image
                     src="/time/caiosouza.png"
                     alt="Caio Souza"
                     width={128}
                     height={128}
                     className="w-full h-full object-cover rounded-full"
                   />
                 </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Caio Souza</h3>
                  <p className="text-simpli-teal font-semibold mb-4">O Agente</p>
                 <p className="text-gray-600 mb-4">
                   Arquitetura de Automação com Inteligência Artificial.
                 </p>
                 <div className="flex justify-center space-x-4">
                   <a href="https://instagram.com/caiosouza.ia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-simpli-teal transition-colors">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </a>
                 </div>
               </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={contactRef} className="py-20" style={{ background: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Entre em contato conosco e descubra como nossa equipe pode ajudar sua empresa a alcançar o próximo nível na transformação digital.
          </p>
          <button
            onClick={handleScrollToContact}
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
    </>
  );
};

export default AboutPage;

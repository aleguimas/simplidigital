'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import '../lib/i18n';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { useCookieConsent } from '../lib/useCookieConsent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isTreinamentosMenuOpen, setIsTreinamentosMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileTrainingsOpen, setIsMobileTrainingsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(i18n.language || 'pt-BR');
  const { acceptCookies, rejectCookies } = useCookieConsent();
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const treinamentosMenuRef = useRef<HTMLDivElement>(null);
  const treinamentosMenuTriggerRef = useRef<HTMLButtonElement>(null);

  // Handle language change without full page reload
  const handleLanguageChange = (newLanguage: string) => {
    setActiveLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    // Update document language attribute
    document.documentElement.lang = newLanguage.split('-')[0];
  };

  // Handle keyboard navigation for mega menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMegaMenuOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsMegaMenuOpen(false);
          megaMenuTriggerRef.current?.focus();
          break;
        case 'Tab':
          // Handle tab navigation within mega menu
          if (megaMenuRef.current) {
            const focusableElements = megaMenuRef.current.querySelectorAll(
              'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMegaMenuOpen]);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        megaMenuTriggerRef.current &&
        !megaMenuTriggerRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
      
      if (
        treinamentosMenuRef.current &&
        !treinamentosMenuRef.current.contains(event.target as Node) &&
        treinamentosMenuTriggerRef.current &&
        !treinamentosMenuTriggerRef.current.contains(event.target as Node)
      ) {
        setIsTreinamentosMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMegaMenu = () => setIsMegaMenuOpen(!isMegaMenuOpen);
  const toggleTreinamentosMenu = () => setIsTreinamentosMenuOpen(!isTreinamentosMenuOpen);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image
                  src="/images/logo-simpli-digital.webp"
                  alt="Simplí Digital"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-simpli-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.home')}
              </Link>
              
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-simpli-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.about')}
              </Link>
              
              {/* Mega Menu Trigger */}
              <div className="relative">
                <button
                  ref={megaMenuTriggerRef}
                  onClick={toggleMegaMenu}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                  className="text-gray-700 hover:text-simpli-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  aria-controls="mega-menu"
                >
                  Serviços
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu */}
                <div
                  ref={megaMenuRef}
                  id="mega-menu"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                  className={`absolute top-full left-0 w-96 bg-white shadow-xl rounded-lg border border-gray-200 transition-all duration-300 ease-in-out ${
                    isMegaMenuOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                  role="menu"
                  aria-label="Serviços"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/servicos/desenvolvimento-web"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Desenvolvimento Web
                            </h3>
                            <p className="text-sm text-gray-500">
                              Sites e aplicações web modernas
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/servicos/agentes-ia"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Agentes de IA
                            </h3>
                            <p className="text-sm text-gray-500">
                              Automação inteligente e chatbots
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/servicos/trafego-pago"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Tráfego Pago
                            </h3>
                            <p className="text-sm text-gray-500">
                              Campanhas de marketing digital
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/servicos/consultoria-digital"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Consultoria Digital
                            </h3>
                            <p className="text-sm text-gray-500">
                              Estratégia e transformação digital
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Treinamentos Dropdown */}
              <div className="relative">
                <button
                  ref={treinamentosMenuTriggerRef}
                  onClick={toggleTreinamentosMenu}
                  onMouseEnter={() => setIsTreinamentosMenuOpen(true)}
                  onMouseLeave={() => setIsTreinamentosMenuOpen(false)}
                  className="text-gray-700 hover:text-simpli-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  aria-expanded={isTreinamentosMenuOpen}
                  aria-haspopup="true"
                  aria-controls="treinamentos-menu"
                >
                  Treinamentos
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isTreinamentosMenuOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Treinamentos Menu */}
                <div
                  ref={treinamentosMenuRef}
                  id="treinamentos-menu"
                  onMouseEnter={() => setIsTreinamentosMenuOpen(true)}
                  onMouseLeave={() => setIsTreinamentosMenuOpen(false)}
                  className={`absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg border border-gray-200 transition-all duration-300 ease-in-out ${
                    isTreinamentosMenuOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                  role="menu"
                  aria-label="Treinamentos"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Treinamentos In Company</h3>
                      <p className="text-sm text-gray-600">
                        Capacite sua equipe com nossos treinamentos especializados
                      </p>
                    </div>
                    <div className="space-y-3">
                      <Link
                        href="/treinamentos/imersao-ia-generativa"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isTreinamentosMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Imersão de IA para Negócios
                            </h4>
                            <p className="text-xs text-gray-500">
                              Workshop intensivo de 10 horas
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/treinamentos/atendimento-cliente"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isTreinamentosMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Atendimento ao Cliente
                            </h4>
                            <p className="text-xs text-gray-500">
                              Físico e online com excelência
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/treinamentos/tecnicas-vendas"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isTreinamentosMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Técnicas de Vendas
                            </h4>
                            <p className="text-xs text-gray-500">
                              Físico e online para conversões
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/treinamentos/visual-merchandising"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isTreinamentosMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-simpli-teal">
                              Visual Merchandising
                            </h4>
                            <p className="text-xs text-gray-500">
                              Transforme seu ponto de venda
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-simpli-teal px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.contact')}
              </Link>

              {/* Language Switcher */}
              <div className="relative">
                <select
                  value={activeLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-simpli-teal focus:border-transparent appearance-none pr-8"
                  aria-label="Selecionar idioma"
                >
                  <option value="pt-BR">🇧🇷 PT</option>
                  <option value="en-US">🇺🇸 EN</option>
                  <option value="es-ES">🇪🇸 ES</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-simpli-teal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-simpli-teal"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Abrir menu principal</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-4 pt-4 pb-6 bg-white shadow-lg border-t border-gray-200">
              <div className="space-y-1">
                {/* Home */}
                <Link 
                  href="/" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {t('nav.home')}
                </Link>

                {/* About */}
                <Link 
                  href="/sobre" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('nav.about')}
                </Link>

                {/* Services - Expandable */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-base font-medium transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Serviços
                    </div>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileServicesOpen && (
                    <div className="ml-8 mt-2 space-y-1">
                      <Link 
                        href="/servicos/desenvolvimento-web" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Desenvolvimento Web
                      </Link>
                      <Link 
                        href="/servicos/agentes-ia" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Agentes de IA
                      </Link>
                      <Link 
                        href="/servicos/trafego-pago" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Tráfego Pago
                      </Link>
                      <Link 
                        href="/servicos/consultoria-digital" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Consultoria Digital
                      </Link>
                    </div>
                  )}
                </div>

                {/* Trainings - Expandable */}
                <div>
                  <button
                    onClick={() => setIsMobileTrainingsOpen(!isMobileTrainingsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-base font-medium transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Treinamentos
                    </div>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileTrainingsOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileTrainingsOpen && (
                    <div className="ml-8 mt-2 space-y-1">
                      <Link 
                        href="/treinamentos/imersao-ia-generativa" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Imersão de IA para Negócios
                      </Link>
                      <Link 
                        href="/treinamentos/atendimento-cliente" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Atendimento ao Cliente
                      </Link>
                      <Link 
                        href="/treinamentos/tecnicas-vendas" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        Técnicas de Vendas
                      </Link>
                      <Link 
                        href="/treinamentos/visual-merchandising" 
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-sm transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        Visual Merchandising
                      </Link>
                    </div>
                  )}
                </div>

                {/* Contact */}
                <Link 
                  href="/contato" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-simpli-teal rounded-lg text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('nav.contact')}
                </Link>

                {/* Language Selector */}
                <div className="px-4 py-3 border-t border-gray-200 mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                  <select
                    value={activeLanguage}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                  >
                    <option value="pt-BR">🇧🇷 Português</option>
                    <option value="en-US">🇺🇸 English</option>
                    <option value="es-ES">🇪🇸 Español</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />

      {/* Cookie Banner */}
      <CookieBanner onAccept={acceptCookies} onReject={rejectCookies} />
    </div>
  );
};

export default Layout; 
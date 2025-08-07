'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import '../lib/i18n';
import FloatingWhatsApp from './FloatingWhatsApp';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(i18n.language || 'pt-BR');
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaMenuTriggerRef = useRef<HTMLButtonElement>(null);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMegaMenu = () => setIsMegaMenuOpen(!isMegaMenuOpen);

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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-simpli-teal block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-simpli-teal block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/servicos" 
                className="text-gray-700 hover:text-simpli-teal block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-simpli-teal block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <select
                  value={activeLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-simpli-teal focus:border-transparent"
                >
                  <option value="pt-BR">🇧🇷 Português</option>
                  <option value="en-US">🇺🇸 English</option>
                  <option value="es-ES">🇪🇸 Español</option>
                </select>
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
    </div>
  );
};

export default Layout; 
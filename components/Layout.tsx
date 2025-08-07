'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import '../lib/i18n';

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
                  src="/images/logo-simpli-digital.svg"
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
                className="text-gray-700 hover:text-simpli-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.home')}
              </Link>
              
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-simpli-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.about')}
              </Link>
              
              {/* Mega Menu Trigger */}
              <div className="relative">
                <button
                  ref={megaMenuTriggerRef}
                  onClick={toggleMegaMenu}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className="text-gray-700 hover:text-simpli-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  aria-controls="mega-menu"
                >
                  {t('nav.consulting')}
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
                  aria-label="Consultorias"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/consultorias/estrategia-digital"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-simpli rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-green">
                              Estratégia Digital
                            </h3>
                            <p className="text-sm text-gray-500">
                              Transformação digital e inovação
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/consultorias/desenvolvimento"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-simpli rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-green">
                              Desenvolvimento
                            </h3>
                            <p className="text-sm text-gray-500">
                              Aplicações web e mobile
                            </p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/consultorias/consultoria"
                        className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        role="menuitem"
                        tabIndex={isMegaMenuOpen ? 0 : -1}
                      >
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-simpli rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-simpli-green">
                              Consultoria
                            </h3>
                            <p className="text-sm text-gray-500">
                              Assessoria especializada
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
                className="text-gray-700 hover:text-simpli-green px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {t('nav.contact')}
              </Link>

              {/* Language Switcher */}
              <div className="relative">
                <select
                  value={activeLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-simpli-green focus:border-transparent appearance-none pr-8"
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
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-simpli-green hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-simpli-green"
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
                className="text-gray-700 hover:text-simpli-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/sobre" 
                className="text-gray-700 hover:text-simpli-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/consultorias" 
                className="text-gray-700 hover:text-simpli-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.consulting')}
              </Link>
              <Link 
                href="/contato" 
                className="text-gray-700 hover:text-simpli-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>

              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <select
                  value={activeLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-simpli-green focus:border-transparent"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo-simpli-digital.svg"
                  alt="Simplí Digital"
                  width={120}
                  height={40}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Transformação digital e inovação para empresas que buscam se destacar no mercado.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/simpli-digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-simpli-green transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/simplidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-simpli-green transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/simplidigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-simpli-green transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.927-.175-1.297-.49-.37-.315-.49-.752-.49-1.242 0-.49.12-.927.49-1.242.37-.315.807-.49 1.297-.49s.927.175 1.297.49c.37.315.49.752.49 1.242 0 .49-.12.927-.49 1.242-.37.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="text-gray-300 hover:text-simpli-green transition-colors duration-200"
                  >
                    {t('nav.home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/sobre" 
                    className="text-gray-300 hover:text-simpli-green transition-colors duration-200"
                  >
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/consultorias" 
                    className="text-gray-300 hover:text-simpli-green transition-colors duration-200"
                  >
                    {t('nav.consulting')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contato" 
                    className="text-gray-300 hover:text-simpli-green transition-colors duration-200"
                  >
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>contato@simpli-digital.com</p>
                <p>+55 (11) 99999-9999</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
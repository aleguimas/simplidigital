'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-900">Simplí Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sobre
            </Link>
            <Link href="/consultorias" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Consultorias
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Contato
            </Link>
            
            {/* Language Selector - Simplified for now */}
            <div className="relative">
                             <select
                 className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-simpli-green"
               >
                <option value="pt-BR">🇧🇷 PT</option>
                <option value="en-US">🇺🇸 EN</option>
                <option value="es-ES">🇪🇸 ES</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Início
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Sobre
            </Link>
            <Link href="/consultorias" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Consultorias
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
              Contato
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="px-3 py-2">
                             <select
                 className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-simpli-green"
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
  );
};

export default Navigation; 
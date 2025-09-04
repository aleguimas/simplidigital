'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieBanner = ({ onAccept, onReject }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    onReject();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🍪 Uso de Cookies e Proteção de Dados
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. 
              Seus dados são tratados com total segurança e conforme a{' '}
              <Link href="/politica-privacidade" className="text-simpli-green hover:underline font-medium">
                Política de Privacidade
              </Link>
              .
            </p>
            <p className="text-xs text-gray-500">
              Ao continuar navegando, você concorda com nossa política de cookies e tratamento de dados pessoais.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Rejeitar
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 text-sm font-medium text-white bg-simpli-green rounded-lg hover:opacity-90 transition-colors duration-200"
            >
              Aceitar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

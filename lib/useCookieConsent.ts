'use client';

import { useState, useEffect } from 'react';

// Declaração de tipo para gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export type CookieConsent = 'accepted' | 'rejected' | null;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica o consentimento armazenado
    const storedConsent = localStorage.getItem('cookie-consent') as CookieConsent;
    setConsent(storedConsent);
    setIsLoading(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setConsent('accepted');
    
    // Inicializa Google Analytics se aceito
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setConsent('rejected');
    
    // Desabilita Google Analytics se rejeitado
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  };

  const hasConsent = () => {
    return consent === 'accepted';
  };

  const canUseAnalytics = () => {
    return consent === 'accepted';
  };

  return {
    consent,
    isLoading,
    acceptCookies,
    rejectCookies,
    hasConsent,
    canUseAnalytics
  };
};

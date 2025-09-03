'use client';

import { useEffect, useState } from 'react';
import { isIADomain, getCurrentDomain } from '../lib/domains';

export default function DomainDetector() {
  useEffect(() => {
    // Componente invisível que apenas detecta o domínio
    getCurrentDomain();
    isIADomain();
  }, []);

  return null;
}

// Hook para usar em outros componentes
export const useDomain = () => {
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const [isIA, setIsIA] = useState<boolean>(false);

  useEffect(() => {
    setCurrentDomain(getCurrentDomain());
    setIsIA(isIADomain());
  }, []);

  return { currentDomain, isIA };
};

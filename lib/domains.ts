export const DOMAINS = {
  PRIMARY: 'https://www.simpli.ia.br',
  IA: 'https://www.simpli.ia.br',
} as const;

export const getCurrentDomain = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return DOMAINS.PRIMARY;
};

export const isIADomain = (): boolean => {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'simpli.ia.br';
  }
  return false;
};

export const getCanonicalUrl = (path: string): string => {
  const domain = getCurrentDomain();
  return `${domain}${path}`;
};

export const getAlternateUrls = (path: string) => {
  return {
    'pt-BR': `${DOMAINS.PRIMARY}${path}`,
    'en-US': `${DOMAINS.PRIMARY}/en${path}`,
    'es-ES': `${DOMAINS.PRIMARY}/es${path}`,
  };
};

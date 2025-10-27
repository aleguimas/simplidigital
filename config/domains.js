// Configuração de domínios para o site
export const DOMAIN_CONFIG = {
  // Domínio principal
  PRIMARY: {
    domain: 'https://www.simplidigital.dev',
    name: 'Simplí Digital',
    description: 'Transformação digital e inovação para empresas',
    focus: 'general',
  },
  
  // Domínio específico para IA
  IA: {
    domain: 'https://simpli.ia.br',
    name: 'Simplí IA',
    description: 'Especialistas em Inteligência Artificial e Treinamentos',
    focus: 'ai-training',
  },
};

// Configuração de redirecionamentos
export const REDIRECTS = {
  // Páginas que devem redirecionar para o domínio IA
  IA_PAGES: [
    '/treinamentos/imersao-ia-generativa',
    '/treinamentos',
  ],
  
  // Páginas que devem permanecer no domínio principal
  PRIMARY_PAGES: [
    '/',
    '/sobre',
    '/servicos',
    '/consultorias',
    '/contato',
  ],
};

// Função para determinar o domínio correto para uma página
export const getDomainForPage = (path) => {
  if (REDIRECTS.IA_PAGES.some(page => path.startsWith(page))) {
    return DOMAIN_CONFIG.IA.domain;
  }
  return DOMAIN_CONFIG.PRIMARY.domain;
};

// Configuração de SEO para cada domínio
export const SEO_CONFIG = {
  PRIMARY: {
    title: 'Simplí Digital - Transformação Digital e Inovação',
    description: 'Transformação digital e inovação para empresas que buscam se destacar no mercado.',
    keywords: ['transformação digital', 'consultoria', 'desenvolvimento web', 'aplicações mobile', 'estratégia digital'],
  },
  IA: {
    title: 'Simplí IA - Especialistas em Inteligência Artificial',
    description: 'Treinamentos e consultoria especializada em IA para empresas. Alexandre Guimarães (Guimas).',
    keywords: ['inteligência artificial', 'treinamento IA', 'workshop IA', 'consultoria IA', 'IA para negócios'],
  },
};

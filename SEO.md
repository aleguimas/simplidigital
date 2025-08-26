# Configurações de SEO - Simplí Digital

## 📋 Visão Geral

Este documento descreve as configurações de SEO implementadas no projeto Simplí Digital, incluindo meta tags, Open Graph, Twitter Cards, JSON-LD e geração automática de sitemap.

## 🎯 Implementações Realizadas

### 1. Meta Tags Open Graph e Twitter Card

#### **Layout Principal (`app/layout.tsx`)**
- ✅ **Title**: Template dinâmico com fallback
- ✅ **Description**: Descrição otimizada para transformação digital
- ✅ **Keywords**: Palavras-chave relevantes para o setor
- ✅ **Open Graph**: Configuração completa com imagens
- ✅ **Twitter Cards**: Configuração para compartilhamento
- ✅ **Robots**: Configuração para indexação

#### **Páginas Específicas**
- ✅ **Home**: SEO otimizado para página principal
- ✅ **Sobre**: Meta tags específicas para página institucional
- ✅ **Consultorias**: SEO focado em serviços
- ✅ **Contato**: Meta tags para página de contato

### 2. JSON-LD Schemas

#### **Organization Schema** (Global)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Simplí Digital",
  "url": "https://www.simplidigital.dev",
  "logo": "https://www.simplidigital.dev/images/logo-simpli-digital.webp",
  "description": "Transformação digital e inovação para empresas...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-81-99194-2628",
    "contactType": "customer service",
    "email": "digitalsimpli@gmail.com"
  },
  "sameAs": [
    "https://linkedin.com/company/simpli-digital",
    "https://twitter.com/simplidigital",
    "https://instagram.com/simplidigital"
  ]
}
```

#### **BreadcrumbList Schema** (Por página)
- ✅ **Home**: Breadcrumb simples
- ✅ **Sobre**: Breadcrumb com 2 níveis
- ✅ **Consultorias**: Breadcrumb com 2 níveis
- ✅ **Contato**: Breadcrumb com 2 níveis

### 3. Sitemap e Robots.txt

#### **next-sitemap.config.js**
```javascript
{
  siteUrl: 'https://www.simplidigital.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Prioridades personalizadas por página
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // ... outras páginas
  }
}
```

#### **Sitemap Gerado**
- ✅ **Home**: Prioridade 1.0, frequência diária
- ✅ **Consultorias**: Prioridade 0.9, frequência semanal
- ✅ **Sobre**: Prioridade 0.8, frequência mensal
- ✅ **Contato**: Prioridade 0.8, frequência mensal

#### **Robots.txt**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

Host: https://www.simplidigital.dev
Sitemap: https://www.simplidigital.dev/sitemap.xml
```

## 🖼️ Imagens para SEO

### **Imagens Necessárias**
- ✅ **og-image.jpg**: 1200x630px (Open Graph padrão)
- ✅ **hero-snapshot.jpg**: Imagem da seção hero
- ✅ **about-hero.jpg**: Imagem da página sobre
- ✅ **consulting-hero.jpg**: Imagem da página consultorias
- ✅ **contact-hero.jpg**: Imagem da página contato

### **Localização**
```
public/images/
├── og-image.jpg
├── hero-snapshot.jpg
├── about-hero.jpg
├── consulting-hero.jpg
├── contact-hero.jpg
└── logo-simpli-digital.webp
```

## 🔧 Componente SEO

### **Uso do Componente**
```tsx
import SEO from '@/components/SEO';

<SEO
  title="Título da Página"
  description="Descrição otimizada para SEO"
  canonical="/caminho-da-pagina"
  ogImage="/images/imagem-og.jpg"
  breadcrumbs={[
    { name: 'Início', url: '/' },
    { name: 'Página Atual', url: '/pagina-atual' }
  ]}
/>
```

### **Propriedades Disponíveis**
- `title`: Título da página
- `description`: Meta description
- `canonical`: URL canônica
- `ogImage`: Imagem para Open Graph
- `ogType`: Tipo do Open Graph (padrão: 'website')
- `twitterCard`: Tipo do Twitter Card (padrão: 'summary_large_image')
- `noIndex`: Se deve indexar a página
- `breadcrumbs`: Array de breadcrumbs para JSON-LD

## 📊 Scripts de Build

### **Package.json**
```json
{
  "scripts": {
    "build": "next build",
    "postbuild": "next-sitemap"
  }
}
```

### **Geração Automática**
- ✅ **Sitemap**: Gerado automaticamente após build
- ✅ **Robots.txt**: Gerado automaticamente
- ✅ **Prioridades**: Configuradas por página
- ✅ **Frequências**: Configuradas por página

## 🎨 Meta Tags por Página

### **Home (/)** 
- **Title**: "Simplificando a Transformação Digital"
- **Description**: "Transformação digital e inovação para empresas..."
- **Priority**: 1.0
- **Changefreq**: daily

### **Sobre (/sobre)**
- **Title**: "Sobre a Simplí Digital"
- **Description**: "Conheça nossa história, missão, visão e valores..."
- **Priority**: 0.8
- **Changefreq**: monthly

### **Consultorias (/consultorias)**
- **Title**: "Nossos Serviços"
- **Description**: "Soluções completas em transformação digital..."
- **Priority**: 0.9
- **Changefreq**: weekly

### **Contato (/contato)**
- **Title**: "Entre em Contato"
- **Description**: "Pronto para transformar seu negócio?..."
- **Priority**: 0.8
- **Changefreq**: monthly

## 🚀 Próximos Passos

### **Otimizações Recomendadas**
1. **Substituir imagens placeholder** por imagens reais otimizadas
2. **Configurar Google Search Console** com o sitemap
3. **Implementar Google Analytics** (já configurado)
4. **Adicionar meta tags específicas** para páginas de serviços
5. **Otimizar imagens** com WebP e AVIF
6. **Implementar structured data** para serviços específicos

### **Monitoramento**
- ✅ **Sitemap**: Acessível em `/sitemap.xml`
- ✅ **Robots**: Acessível em `/robots.txt`
- ✅ **Meta tags**: Verificáveis com ferramentas de SEO
- ✅ **JSON-LD**: Validável com Google Rich Results Test

## 📝 Notas Importantes

1. **Imagens**: Os arquivos de imagem são placeholders e devem ser substituídos por imagens reais
2. **URLs**: Configure a variável de ambiente `SITE_URL` para produção
3. **Verificação**: Use o Google Search Console para verificar a indexação
4. **Performance**: As imagens devem ser otimizadas para web
5. **Acessibilidade**: Todas as imagens devem ter alt text apropriado

---

**Status**: ✅ Implementação completa
**Última atualização**: Agosto 2024
**Versão**: 1.0

# 🌐 Configuração de Múltiplos Domínios

Este projeto suporta múltiplos domínios para otimizar SEO e segmentar conteúdo específico.

## 📋 Domínios Configurados

### 1. **Domínio Principal**
- **URL**: `https://www.simplidigital.dev`
- **Foco**: Site principal com todos os serviços
- **Conteúdo**: Desenvolvimento web, consultoria, serviços gerais

### 2. **Domínio IA**
- **URL**: `https://www.simpli.ia.br`
- **Foco**: Especializado em Inteligência Artificial
- **Conteúdo**: Treinamentos de IA, workshops, consultoria específica

## 🚀 Como Funciona

### **Detecção Automática de Domínio**
- O sistema detecta automaticamente qual domínio está sendo acessado
- Ajusta o conteúdo e URLs conforme o contexto
- Mantém SEO otimizado para cada domínio

### **Redirecionamentos Inteligentes**
- Páginas de IA redirecionam para `simpli.ia.br`
- Páginas gerais permanecem em `simplidigital.dev`
- URLs canônicas são ajustadas automaticamente

## ⚙️ Configuração

### **1. Configuração de DNS**
```bash
# Domínio Principal
simplidigital.dev -> Seu servidor

# Domínio IA
simpli.ia.br -> Seu servidor (mesmo IP)
```

### **2. Configuração de Hosting**
- Ambos os domínios apontam para o mesmo projeto
- O Next.js detecta o hostname e ajusta o comportamento
- Sitemaps separados são gerados para cada domínio

### **3. Variáveis de Ambiente**
```bash
# .env.local
NEXT_PUBLIC_PRIMARY_DOMAIN=https://www.simplidigital.dev
NEXT_PUBLIC_IA_DOMAIN=https://www.simpli.ia.br
SITE_URL=https://www.simplidigital.dev
```

## 📁 Estrutura de Arquivos

```
├── lib/
│   └── domains.ts          # Configuração de domínios
├── components/
│   └── DomainDetector.tsx  # Detector de domínio
├── config/
│   └── domains.js          # Configuração avançada
├── next-sitemap.config.js  # Sitemap principal
├── next-sitemap-ia.config.js # Sitemap IA
└── next.config.ts          # Configuração Next.js
```

## 🔧 Scripts Disponíveis

### **Geração de Sitemaps**
```bash
# Gerar sitemap principal
npm run sitemap

# Gerar sitemap IA
npm run sitemap:ia

# Gerar ambos (executado automaticamente no build)
npm run postbuild
```

### **Desenvolvimento**
```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start
```

## 📊 SEO e Performance

### **Sitemaps Separados**
- `simplidigital.dev/sitemap.xml` - Site principal
- `simpli.ia.br/sitemap.xml` - Conteúdo de IA
- Prioridades otimizadas para cada domínio

### **URLs Canônicas**
- Cada página tem URL canônica específica do domínio
- Evita conteúdo duplicado
- Melhora ranking nos motores de busca

### **Meta Tags Dinâmicas**
- Títulos e descrições ajustados por domínio
- Open Graph otimizado para cada contexto
- Keywords específicas para IA vs. serviços gerais

## 🌍 Cobertura Internacional

### **Idiomas Suportados**
- **Português (BR)**: Ambos os domínios
- **Inglês (US)**: Apenas domínio principal
- **Espanhol (ES)**: Apenas domínio principal

### **URLs Alternativas**
```typescript
alternates: {
  'pt-BR': `${DOMAINS.PRIMARY}/treinamentos/imersao-ia-generativa`,
  'en-US': `${DOMAINS.PRIMARY}/en/trainings/ai-immersion`,
  'es-ES': `${DOMAINS.PRIMARY}/es/entrenamientos/inmersion-ia`,
  'pt-BR-IA': `${DOMAINS.IA}/treinamentos/imersao-ia-generativa`,
}
```

## 🔍 Monitoramento e Analytics

### **Google Analytics**
- Tracking separado por domínio
- Eventos específicos para cada contexto
- Relatórios segmentados

### **Performance**
- Lazy loading de componentes específicos por domínio
- Otimização de imagens por contexto
- Cache inteligente baseado no hostname

## 🚨 Considerações Importantes

### **1. SSL/HTTPS**
- Ambos os domínios devem ter certificados SSL válidos
- Redirecionamentos automáticos de HTTP para HTTPS

### **2. Cache e CDN**
- Configurar cache separado por domínio
- CDN deve respeitar os headers de domínio

### **3. Backup e Deploy**
- Deploy único para ambos os domínios
- Backup inclui configurações de ambos os contextos

## 📈 Benefícios

### **SEO**
- Foco específico para cada domínio
- URLs otimizadas para palavras-chave
- Sitemaps especializados

### **Marketing**
- Segmentação de audiência
- Campanhas específicas por domínio
- Tracking de conversão separado

### **Técnico**
- Código único para ambos os domínios
- Manutenção simplificada
- Performance otimizada

## 🆘 Suporte e Troubleshooting

### **Problemas Comuns**
1. **Domínio não detectado**: Verificar configuração de DNS
2. **Sitemap não gerado**: Executar `npm run sitemap:ia`
3. **Redirecionamentos não funcionando**: Verificar `next.config.ts`

### **Logs e Debug**
```bash
# Verificar configuração de domínios
console.log('Current domain:', getCurrentDomain());
console.log('Is IA domain:', isIADomain());
```

## 🔮 Próximos Passos

### **Melhorias Planejadas**
- [ ] Dashboard de analytics por domínio
- [ ] A/B testing entre domínios
- [ ] Personalização avançada por contexto
- [ ] Integração com ferramentas de marketing

### **Expansão**
- [ ] Novos subdomínios para nichos específicos
- [ ] Domínios regionais (BR, US, ES)
- [ ] Microsites especializados

---

**Nota**: Esta configuração permite que você tenha um site único que se comporta como múltiplos sites especializados, otimizando SEO e experiência do usuário para cada contexto específico.

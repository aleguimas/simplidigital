# Simplí Inovação Digital

Site institucional da Simplí Inovação Digital - Consultoria e desenvolvimento para transformação digital.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **next-i18next** - Internacionalização
- **next-seo** - Gerenciamento de SEO
- **Google Analytics** - Análise de dados

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd simpli-digital
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto com:
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.simplidigital.dev
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000)

## 🌍 Internacionalização

O projeto suporta três idiomas:
- **pt-BR** (Português Brasileiro) - Padrão
- **en-US** (Inglês Americano)
- **es-ES** (Espanhol)

### Estrutura de Traduções

```
public/locales/
├── pt-BR/
│   └── common.json
├── en-US/
│   └── common.json
└── es-ES/
    └── common.json
```

## 📁 Estrutura do Projeto

```
simpli-digital/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página Sobre
│   ├── consultorias/      # Página Consultorias
│   └── contato/           # Página Contato
├── components/            # Componentes reutilizáveis
│   ├── Navigation.tsx     # Navegação
│   ├── Footer.tsx         # Rodapé
│   ├── SEO.tsx            # SEO global
│   └── GoogleAnalytics.tsx # Google Analytics
├── public/                # Arquivos estáticos
│   ├── locales/           # Arquivos de tradução
│   └── assets/            # Imagens e outros assets
├── styles/                # Estilos adicionais
└── next-i18next.config.js # Configuração i18n
```

## ⚙️ Configurações

### Tailwind CSS
- Purge ativado para otimização de CSS
- Configuração personalizada de cores e fontes
- Responsividade completa

### SEO
- Meta tags otimizadas
- Open Graph configurado
- Twitter Cards
- Schema.org markup

### Performance
- Lazy loading de imagens
- Divisão automática de código por rota
- Compressão Gzip ativada
- Otimizações de CSS

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js.

## 📝 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa ESLint

## 🔧 Configurações Adicionais

### Google Analytics
1. Crie uma conta no Google Analytics
2. Obtenha o ID de rastreamento (G-XXXXXXXXXX)
3. Configure no arquivo `.env.local`

### Domínio Personalizado
1. Configure o domínio no seu provedor de DNS
2. Atualize `NEXT_PUBLIC_SITE_URL` no `.env.local`
3. Configure no Google Analytics

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: digitalsimpli@gmail.com
- Telefone: +55 (81) 99194-2628

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

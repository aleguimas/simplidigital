# Cores Simplí Digital

## 🎨 Paleta de Cores

### Cores Principais
- **simpli-green**: `#A1FF00` - Verde vibrante da marca
- **simpli-teal**: `#00E0D7` - Azul ciano da marca

### Gradiente Principal
- **bg-gradient-simpli**: `linear-gradient(to right, #A1FF00, #00E0D7)`

## 📝 Como Usar

### Classes de Cores
```html
<!-- Cores sólidas -->
<div className="bg-simpli-green">Fundo verde</div>
<div className="text-simpli-teal">Texto ciano</div>
<div className="border-simpli-green">Borda verde</div>

<!-- Gradiente -->
<div className="bg-gradient-simpli">Fundo com gradiente</div>
```

### Exemplos de Uso

#### Botões
```html
<!-- Botão com gradiente -->
<button className="bg-gradient-simpli text-white px-4 py-2 rounded-lg hover:opacity-90">
  Clique Aqui
</button>

<!-- Botão com cor sólida -->
<button className="bg-simpli-green text-white px-4 py-2 rounded-lg hover:opacity-90">
  Ação
</button>
```

#### Textos
```html
<!-- Títulos com cor da marca -->
<h1 className="text-simpli-teal font-bold">Título Principal</h1>
<h2 className="text-simpli-green">Subtítulo</h2>
```

#### Elementos de Interface
```html
<!-- Cards com gradiente -->
<div className="bg-gradient-simpli p-6 rounded-lg text-white">
  Conteúdo do card
</div>

<!-- Ícones com cor da marca -->
<svg className="w-6 h-6 text-simpli-green" fill="currentColor">
  <!-- ícone -->
</svg>
```

## 🎯 Aplicações Recomendadas

### simpli-green (#A1FF00)
- Botões de ação principal
- Destaques importantes
- Elementos de call-to-action
- Status de sucesso

### simpli-teal (#00E0D7)
- Títulos e subtítulos
- Links importantes
- Elementos de navegação
- Informações secundárias

### bg-gradient-simpli
- Seções hero
- Botões especiais
- Cards de destaque
- Headers de seção

## 🔧 Configuração no Tailwind

As cores estão configuradas no `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'simpli-green': '#A1FF00',
      'simpli-teal': '#00E0D7',
    },
    backgroundImage: {
      'gradient-simpli': 'linear-gradient(to right, #A1FF00, #00E0D7)',
    },
  },
},
```

## 📱 Responsividade

Todas as cores funcionam perfeitamente em:
- Desktop
- Tablet
- Mobile
- Modo escuro (quando implementado)

## 🎨 Acessibilidade

As cores foram escolhidas considerando:
- Contraste adequado com texto branco
- Visibilidade em diferentes dispositivos
- Distinção para usuários com daltonismo 
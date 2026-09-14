# Paula Cristina - Site Catálogo

Site estático estilo catálogo para **Paula Cristina - Lash Designer & Estética**, desenvolvido com foco em luxo, sofisticação e experiência premium.

## 🎨 Design

- **Paleta:** Preto (#0A0A0A) e Dourado (#C8A951)
- **Estilo:** Luxo e sofisticação
- **Tipografia:** Outfit (texto) + Playfair Display (títulos)
- **Totalmente responsivo** (desktop, tablet, mobile)

## 📁 Estrutura

```
SITE-PAULA/
├── index.html          # Página principal
├── styles.css          # Estilos completos
├── script.js           # Interatividade (menu, filtros, animações)
├── Tabela de valores .pdf  # Documento original
└── README.md           # Este arquivo
```

## 📋 Seções do Site

1. **Header fixo** com navegação suave
2. **Hero** - Apresentação impactante
3. **Sobre Mim** - Biografia da Paula
4. **Procedimentos** - 4 cards com filtros:
   - 🐱 Fox Eyes (Cílios)
   - 👁️ Cílios Fio a Fio
   - ✨ Remoção de Cílios (Cílios)
   - 💆 Drenagem Linfática (com preços)
5. **Galeria** - Espaço para fotos reais
6. **Contato** - WhatsApp, Instagram, E-mail
7. **Footer** - Informações finais

## ✨ Funcionalidades

- ✅ Botão flutuante de WhatsApp (com animação pulse)
- ✅ Filtros por categoria de procedimento
- ✅ Menu mobile responsivo
- ✅ Scroll suave entre seções
- ✅ Animações ao entrar na viewport
- ✅ Botão "Agendar" em cada card que abre o WhatsApp

## 📱 Contato Configurado

- **WhatsApp:** +55 62 9 8648-0449
- **Instagram:** @paulacristina.lash (placeholder)
- **E-mail:** contato@paulacristina.com (placeholder)

## 🚀 Como Visualizar

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
# Opção 1: Abrir direto
# Duplo-clique em index.html

# Opção 2: Servidor local (Python)
python -m http.server 8000

# Opção 3: Live Server (VS Code)
# Instale a extensão "Live Server" e clique em "Go Live"
```

## 🛠️ Customizações Futuras

### Substituir placeholders por conteúdo real:

1. **Foto da Paula:** substituir a div `.image-placeholder` por `<img>`
2. **Galeria:** substituir `.galeria-placeholder` pelas fotos reais
3. **Instagram:** atualizar o `@paulacristina.lash` no HTML
4. **E-mail:** atualizar `contato@paulacristina.com` no HTML

### Estrutura para adicionar foto:

```html
<!-- Em vez de: -->
<div class="image-placeholder"><span>PC</span></div>

<!-- Use: -->
<img src="assets/foto-paula.jpg" alt="Paula Cristina">
```

## 📞 Próximos Passos

1. Adicionar fotos reais da Paula e dos procedimentos
2. Configurar domínio personalizado
3. Adicionar Google Analytics
4. Configurar SEO (meta tags, sitemap.xml)

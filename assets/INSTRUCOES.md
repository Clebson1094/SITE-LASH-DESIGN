# 📸 Guia de Imagens - Site Paula Cristina

## 📁 Estrutura de Pastas

```
assets/
├── perfil/
│   ├── paula-cristina.jpg          # Foto principal da Paula (seção "Sobre Mim" - grande)
│   └── detalhes/
│       └── atendimento.jpg         # Foto de detalhe/atendimento (menor, sobreposta)
│
├── procedimentos/
│   ├── fox-eyes.jpg                # Imagem do procedimento Fox Eyes ✅ EXISTE
│   ├── fio-a-fio.jpg               # Imagem do procedimento Cílios Fio a Fio
│   ├── remocao-de-cilios.jpg       # Imagem do procedimento Remoção de Cílios
│   └── drenagem-linfatica.jpg      # Imagem do procedimento Drenagem Linfática
│
└── galeria/
    ├── antes-depois-01.jpg         # Antes e depois 1
    ├── antes-depois-02.jpg         # Antes e depois 2
    ├── fox-eyes-01.jpg             # Resultado Fox Eyes 1
    ├── fox-eyes-02.jpg             # Resultado Fox Eyes 2
    ├── fio-a-fio-01.jpg            # Resultado Fio a Fio 1
    ├── fio-a-fio-02.jpg            # Resultado Fio a Fio 2
    ├── drenagem-01.jpg             # Resultado Drenagem 1
    ├── atendimento-01.jpg          # Foto do ambiente/atendimento
    └── remocao-de-cilios.jpg         # Imagem do procedimento Remoção de Cílios
```

## 🎨 Formato de Arquivo

### Recomendado: **.webp** (melhor performance)
- Compressão superior ao JPG
- Mantém qualidade visual
- Arquivos menores = site mais rápido

### Alternativas aceitas: **.jpg** ou **.jpeg**
- Compatibilidade universal
- Boa qualidade

### Evitar:
- ❌ **.png** (muito pesado para fotos)
- ❌ **.gif** (não otimizado)
- ❌ **.bmp** (arquivo gigante)

## 📐 Tamanhos Recomendados

| Local | Dimensões | Proporção | Peso Máximo |
|-------|-----------|-----------|-------------|
| **Foto principal** (perfil) | 800x1000px | 4:5 (retrato) | 300 KB |
| **Foto de detalhe** (atendimento) | 500x625px | 4:5 (retrato) | 150 KB |
| **Procedimentos** (cards) | 800x500px | 16:10 (paisagem) | 250 KB cada |
| **Galeria** (geral) | 800x800px | 1:1 (quadrado) | 200 KB cada |
| **Galeria destaque** | 1600x1200px | 4:3 | 400 KB |

## 📝 Convenção de Nomes

Use **kebab-case** (palavras separadas por hífen, tudo minúsculo):

✅ **Correto:**
- `fox-eyes.jpg`
- `antes-depois-01.jpg`
- `fio-a-fio.jpg`

❌ **Errado:**
- `FoxEyes.jpg`
- `antes depois.jpg`
- `img_001.jpg`

## 🛠️ Como Otimizar as Imagens

### Opção 1: Sites Online (mais fácil)
- **[TinyPNG](https://tinypng.com)** - comprime JPG/PNG
- **[Squoosh](https://squoosh.app)** - converte para WebP
- **[iLoveIMG](https://www.iloveimg.com)** - redimensionar em lote

### Opção 2: Photoshop / GIMP
1. Abrir a imagem
2. `Arquivo > Exportar > Exportar como...`
3. Escolher formato **JPG** ou **WebP**
4. Qualidade: **80-85%** (equilíbrio ideal)
5. Redimensionar para o tamanho recomendado

### Opção 3: Linha de Comando (avançado)

```bash
# Instalar ferramentas
npm install -g sharp-cli

# Converter para WebP e redimensionar
sharp -i foto-original.jpg -o assets/perfil/paula-cristina.webp -f webp --width 800
```

## 📱 Dicas de Fotografia

### Para procedimentos de cílios:
- 📸 Use iluminação natural ou ring light
- 🎯 Foco no olho, fundo desfocado
- 📐 Foto bem próxima (macro)
- ✨ Mostre o olhar completo

### Para drenagem linfática:
- 🛏️ Ambiente clean, com massageadeira
- 🎨 Cores neutras (branco, bege)
- 📷 Ângulo lateral ou de cima

### Para foto de perfil:
- 🤳 Fundo neutro ou desfocado
- 😊 Expressão acolhedora e profissional
- 💄 Maquiagem leve e natural

## ✅ Checklist Antes de Salvar

- [ ] Imagem está no formato correto (JPG ou WebP)
- [ ] Nome do arquivo segue o padrão kebab-case
- [ ] Tamanho/redimensionamento adequado
- [ ] Imagem otimizada (peso abaixo do limite)
- [ ] Qualidade visual preservada (sem pixelização)
- [ ] Salva na pasta correta

## 🚀 Após Adicionar as Imagens

As imagens serão **automaticamente carregadas** pelo site. Basta:
1. Salvar os arquivos nos locais indicados
2. Atualizar o arquivo [index.html](../index.html) substituindo os placeholders
3. Recarregar a página no navegador

---

**Dúvidas?** É só me perguntar! 📸✨

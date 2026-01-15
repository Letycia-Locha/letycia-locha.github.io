# Portfólio — Jorge Simocovski

Portfólio em Jekyll (GitHub Pages) com design limpo, responsivo e orientado a resultado. Consolidado em uma página onepage com navegação por âncoras.

## ✨ Características

- **Onepage responsivo** — Todas as seções em uma única página (Início, Sobre, Experiência, Projetos, Skills, Contato)
- **Scroll spy** — Navegação destaca a seção atual conforme você scrolla
- **Design system** — Navy (#003366) + Laranja Neon (#FF5F1F)
- **Cases detalhados** — Tres case studies com deep links de impacto
- **Mobile-first** — Layout adaptável com CSS grid e flexbox
- **Smooth scroll** — Navegação suave com âncoras (HTML5 + CSS)

## 🗂️ Estrutura do Projeto

```
_pages/
  index.md                    # Página principal (onepage com todas as seções)
  quality-culture.md          # Case: Cultura de Qualidade
  quality-data-product.md     # Case: Qualidade como Produto de Dados
  intelligent-quality.md      # Case: Qualidade Inteligente (IA + Testes)

_data/
  navigation.yml              # Navegação (âncoras para seções onepage)

_includes/
  site-nav.html               # Header + menu com scroll spy

assets/css/
  custom.css                  # Design system (vars, grid, cards, responsivo)

_layouts/
  single.html                 # Layout limpo

archive/
  (pasta arquivos antigos — removida)
```

## 🎯 Navegação e Âncoras

A navegação aponta para as seguintes âncoras:
- `#inicio` — Hero + CTA
- `#sobre` — Trajetória e diferencial
- `#experiencia` — Timeline profissional
- `#projetos` — Impact cards de cases
- `#skills` — Competências por categoria
- `#contato` — Footer com LinkedIn e email

## 📱 Como Adicionar um Novo Case

1. Crie arquivo em `_pages/seu-case.md`
2. Use permalink como `/cases/seu-case/`:
   ```yaml
   ---
   title: "Seu Case"
   permalink: /cases/seu-case/
   layout: single
   author_profile: false
   ---
   ```
3. Estruture com: **Contexto → Problema → Decisão → Abordagem → Métricas → Impacto → Resultado**
4. Adicione link no section `#projetos` do `index.md` com impact card
5. Commit e push — site atualiza automaticamente no GitHub Pages

## 🚀 Executar Localmente

```bash
# Instalar dependências
gem install bundler jekyll
bundle install

# Servir em http://localhost:4000/Jorge-Simocovski/
bundle exec jekyll serve --livereload --baseurl "/Jorge-Simocovski"
```

## 🎨 Paleta de Cores

| Elemento | Cor | Hex |
|----------|-----|-----|
| Primária (Navy) | | `#003366` |
| Destaque (Laranja) | | `#FF5F1F` |
| Background claro | | `#F8F9FA` |
| Texto escuro | | `#1A1A1A` |
| Texto médio | | `#555555` |

## 📝 Versão Atual

- **Data:** 15 de janeiro de 2026
- **Status:** ✅ Onepage consolidada, cases vinculados, navegação com scroll spy
- **Últimos ajustes:** Remoção de arquivos duplicados, melhoria de hero, melhor responsividade

## 📌 Nota

Página antiga e arquivos redundantes foram removidos. Estrutura mantém-se limpa e performática.

Todas as cores estão definidas em `assets/css/custom.css` como variáveis CSS (`:root`).

## Testar Localmente

```powershell
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
```

Acesse `http://localhost:4000/Jorge-Simocovski/` no navegador.

## Commits e Deploy

- Commits semânticos: feature, fix, refactor, docs, style
- Cada push para `main` dispara build automático no GitHub Pages (~1 minuto de propagação)
- Rollbacks são fáceis via git revert


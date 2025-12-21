# Portfólio — Jorge Simocovski

Este é um portfólio em Jekyll hospedado no GitHub Pages.

## Manutenção de Cases

Como adicionar/atualizar um case:

1. Crie o arquivo markdown em `_pages/projects/` com o conteúdo do case. Use a estrutura: Contexto → Problema → Objetivos & Métricas → Requisitos → Decisões & Trade‑offs → Execução → Resultados & Aprendizados.
2. Adicione/atualize a entrada correspondente em `_data/projects.yml` com os campos: `id`, `title`, `permalink`, `tags`, `short_blurb`, `key_metric`, `status`, `order`.
3. O índice `/projects/` lê `_data/projects.yml` e exibirá o case como um card automaticamente.
4. Para controlar a ordem de navegação (prev/next), ajuste o campo `order` no `_data/projects.yml`.
5. Mantenha commits pequenos e descritivos. Cada alteração visual ou de conteúdo deve ter um commit separado para fácil rollback.

## Design, testes e execução local

- **Paleta recomendada:** profissional e sóbria — primary `#0b3d91` (navy), accent `#0ea5a4` (teal), neutro `#6b7280` (muted). Essas variáveis estão definidas em `_layouts/single.html` e servem para manter consistência visual.
- **Tom de voz:** claro, técnico na medida certa, confiante e humano — priorize frases que expliquem decisões e impacto (não listas de tarefas).
- **Testar localmente:** para pré-visualizar as mudanças, instale Ruby + Bundler e rode (PowerShell):

```powershell
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
```

- Se não quiser instalar localmente, cada commit será publicado no GitHub Pages após o push (pode demorar alguns minutos para propagar).  


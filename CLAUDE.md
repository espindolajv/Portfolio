# Portfolio — João Victor Macedo

Next.js 15 (App Router) + React 19 RC + TypeScript + Tailwind. Portfólio editorial-minimalista com tema dark/light e i18n pt/en/es.

## Comandos

```bash
pnpm dev      # dev server (localhost:3000)
pnpm build    # build de produção
pnpm lint     # next lint
```

Este projeto usa **pnpm** (não npm/yarn). Há lockfile `pnpm-lock.yaml` — mantenha.

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home (redesign atual) |
| `/projects` | Arquivo completo com filtros Apps/Mobile/Landing |
| `/cv` | CV impressão-ready (A4, `window.print()`) |
| `/v1` | Snapshot congelado da versão anterior — **não alterar** |
| `/api/send` | POST via Resend (precisa `RESEND_API_KEY`) |

## Estrutura

```
src/
├── app/
│   ├── page.tsx                       # home (redesign)
│   ├── layout.tsx                     # fontes + Context
│   ├── globals.css                    # tokens CSS, grain, marquee, CV print
│   ├── icon.svg                       # favicon (gerado)
│   ├── components/
│   │   ├── redesign/                  # componentes da home atual
│   │   │   ├── Nav, Hero, Work, Stack, About, Contact, Footer
│   │   │   ├── SectionHeader, Reveal
│   │   └── (outros)                   # componentes legados usados SOMENTE em /v1
│   ├── projects/
│   │   ├── data.ts                    # fonte única de projetos
│   │   └── page.tsx                   # /projects
│   ├── cv/page.tsx                    # /cv
│   ├── v1/page.tsx                    # /v1 (congelado)
│   ├── i18n/dict.ts                   # traduções pt/en/es
│   └── api/send/route.ts              # endpoint Resend
└── context/context.tsx                # tema (color) + idioma (lang) + t()
```

## Fonte única de projetos

`src/app/projects/data.ts` é a fonte de dados de projetos. Tanto `/` (seção Projetos) quanto `/projects` consomem esse arquivo. Para adicionar um projeto, edite **apenas** `data.ts` e adicione as chaves de tradução (`work.pN*`) em `i18n/dict.ts`.

- `featured: true` → aparece na home (home usa `homeOrder` explícito em `Work.tsx` para ordem)
- `progress: number` (0-100) → mostra badge "Em progresso · NN%" + barra terracota
- `gradient` → CSS usado no placeholder quando `cover` é `null`

## i18n

Idioma detectado de `navigator.language` no mount (`useEffect` no `ContextProvider`), persistido em `localStorage.lang`. Seletor PT/EN/ES no header. Componentes usam `const { t } = useMyContext()` e chamam `t('ns.key')`.

Nunca hardcode strings visíveis — adicione chaves nos três idiomas em `i18n/dict.ts`.

## Tema

Dark por padrão. Toggle via `handleColor` do Context adiciona `theme-light` na `<body>`. Tokens em `globals.css`:

```css
--bg, --surface, --text, --muted, --border, --accent, --accent-soft
```

Use sempre as variáveis CSS; não hardcode cores em componentes.

## Tipografia

3 fontes via `next/font/google`:
- **Instrument Serif** (display) → `.font-display` / `var(--font-display)`
- **Schibsted Grotesk** (body) → default
- **JetBrains Mono** (micro-labels, numbers) → `.font-mono-ui` / `var(--font-mono)`

Padrão: títulos de seção usam serif grande + italic + `.` terracota. Micro-labels usam mono uppercase com tracking amplo (`tracking-[0.22em]`).

## Grids e mobile

Grids `grid-cols-12` devem usar `gap-y-X md:gap-X` (nunca `gap-X` sozinho) — 11 gaps horizontais × 32px+ ultrapassam viewport mobile. Padrão aplicado em todos os componentes redesign.

`<body>` na home tem `grain overflow-x-hidden`. Se adicionar seções novas, mantenha `px-6 md:px-10` e container `max-w-[1440px] mx-auto`.

## Links externos

Todo `<a>`/`<Link>` apontando para `http(s)://` deve ter `target="_blank" rel="noopener noreferrer"`. Em listas dinâmicas (cards), o target é definido condicionalmente via `startsWith("http")`.

## Animações de scroll

Use o componente `Reveal` (`components/redesign/Reveal.tsx`) — IntersectionObserver com fallback de 1.5s. Aceita `delay` em ms e `as` para a tag. Nunca bloqueie conteúdo essencial atrás dele — tem fallback, mas leitores de teste devem ver o conteúdo.

## Deploy

Auto-deploy Vercel via GitHub. Branch principal é **main** (renomeada de master).

- Vercel bloqueia deploy de versões vulneráveis do Next.js. Mantenha `next@^15.5.0` ou superior.
- `RESEND_API_KEY` precisa estar configurada no Vercel para o endpoint `/api/send` funcionar. A rota usa `export const dynamic = 'force-dynamic'` e instancia `Resend` preguiçosamente para permitir build sem a chave.

## Convenções de commit

Português. Cabeçalho descritivo + bullet points explicando o "porquê" das mudanças. Sempre incluir trailer:

```
Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>
```

## O que NÃO alterar

- `/v1` e os componentes legados em `src/app/components/` que ela usa (HomeContent, AboutMeSection, CarouselSection, PetzoneBlock, PlannBlock, TechSection, Navbar, LogoBrand, EmailSend, Dropdown, ButtonNav, Footer legado, etc.) — servem apenas para `/v1`.
- Não remover o link "View v1 ↗" do Footer — é a ponte para a versão antiga.

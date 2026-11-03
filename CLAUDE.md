# Portfolio — João Victor Macedo

Next.js 15 (App Router) + React 19 RC + TypeScript + Tailwind. Portfólio v3 Swiss/minimalista neutro (claro por padrão, toggle escuro) e i18n pt/en/es.

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
| `/` | Home v3 |
| `/projects` | Arquivo completo (v3) com filtros Apps/Mobile/Landing |
| `/cv` | CV impressão-ready (A4, `window.print()`), visual coerente com a v3 (Geist, neutro; tokens `--cv-*` em `.cv-body`). Mantenha em 2 páginas |
| `/v1` | Snapshot congelado da primeira versão — **não alterar** |
| `/v2` | Snapshot congelado do redesign editorial (serif + terracota) — **não alterar** |
| `/api/send` | POST via Resend (precisa `RESEND_API_KEY`) |

## Estrutura

```
src/
├── app/
│   ├── page.tsx                       # home (v3)
│   ├── layout.tsx                     # fontes + Context
│   ├── globals.css                    # tokens CSS, grain, marquee, CV print
│   ├── icon.svg                       # favicon (gerado)
│   ├── components/
│   │   ├── v3/                        # componentes da v3 (home e /projects)
│   │   │   ├── Shell (body + Nav + Footer), Hero, Work, About, Stack, Contact
│   │   │   ├── ProjectIndex (lista-índice; cada linha abre um accordion, um por vez), SectionHeader
│   │   ├── redesign/                  # componentes da v2 (congelada); Reveal é compartilhado
│   │   └── (outros)                   # componentes legados usados SOMENTE em /v1
│   ├── projects/
│   │   ├── data.ts                    # fonte única de projetos
│   │   └── page.tsx                   # /projects
│   ├── cv/page.tsx                    # /cv
│   ├── v1/page.tsx                    # /v1 (congelado)
│   ├── v2/page.tsx                    # /v2 (congelado)
│   ├── i18n/dict.ts                   # traduções pt/en/es
│   └── api/send/route.ts              # endpoint Resend
└── context/context.tsx                # tema (color) + idioma (lang) + t()
```

## Fonte única de projetos

`src/app/projects/data.ts` é a fonte de dados de projetos. Tanto `/` (seção Projetos) quanto `/projects` consomem esse arquivo. Para adicionar um projeto, edite **apenas** `data.ts` e adicione as chaves de tradução (`work.pN*`) em `i18n/dict.ts`.

- Home (`v3/Work.tsx`): carrossel (embla) com um slide por `category` (Apps web → Mobile → Landing pages), mostrando todos os projetos; o título da seção acompanha o slide ativo. Categoria sem projetos não vira slide.
- `alsoIn` → categorias extras em que o projeto também aparece (filtre sempre com `inCategory`)
- `featured` → usado só pela v2
- `progress: number` (0-100) → mostra "Em progresso · NN%" + barra fina
- `cover` / `gallery` → prévia dentro do accordion; sem `cover`, mostra placeholder neutro "Prévia em breve"
- `taglineKey` / `descKey` / `stack` completo / `href` → conteúdo do accordion (botão "Visitar site", ou o texto de `badgeKey` quando existe)
- `href: "#"` → linha sem link (sem seta)
- `gradient` → usado só pela v2

## i18n

Idioma detectado de `navigator.language` no mount (`useEffect` no `ContextProvider`), persistido em `localStorage.lang`. Seletor PT/EN/ES no header. Componentes usam `const { t } = useMyContext()` e chamam `t('ns.key')`.

Nunca hardcode strings visíveis — adicione chaves nos três idiomas em `i18n/dict.ts`.

Textos novos da v3 ficam no namespace `v3.*`; chaves fora dele também são lidas pela v2 congelada — ao mudar conteúdo só da v3, crie/edite chaves `v3.*`.

## Tema

v3: claro por padrão. Tokens escopados em `.v3` (e `.v3.v3-dark`) no `globals.css`, aplicados pelo `Shell`; `color === true` no Context = escuro. Paleta neutra (sem acento colorido); `--signal` só no ponto de status.

```css
--bg, --surface, --text, --muted, --border, --border-strong, --accent-soft, --signal, --nav-bg
```

`:root` / `.theme-light` continuam servindo a v2. Use sempre as variáveis CSS; não hardcode cores em componentes.

## Tipografia

v3: **Geist** (texto e títulos, peso 500 com tracking negativo) e **Geist Mono** (micro-labels, classe `.mono` dentro de `.v3`, uppercase 11px). Títulos de seção: `SectionHeader` com `(NN)` mono à esquerda.

v2 usa Instrument Serif / Schibsted Grotesk / JetBrains Mono (`.font-display`, `.font-mono-ui`).

## Grids e mobile

Grids `grid-cols-12` devem usar `gap-y-X md:gap-X` (nunca `gap-X` sozinho) — 11 gaps horizontais × 32px+ ultrapassam viewport mobile. Padrão aplicado em todos os componentes v3 e redesign.

O `<body>` da v3 vem do `Shell`. Se adicionar seções novas, mantenha `px-6 md:px-10` e container `max-w-[1440px] mx-auto`.

## Links externos

Todo `<a>`/`<Link>` apontando para `http(s)://` deve ter `target="_blank" rel="noopener noreferrer"`. Em listas dinâmicas (cards), o target é definido condicionalmente via `startsWith("http")`.

## Animações de scroll

Use o componente `Reveal` (`components/redesign/Reveal.tsx`; na v3 o movimento é menor e respeita `prefers-reduced-motion`) — IntersectionObserver com fallback de 1.5s. Aceita `delay` em ms e `as` para a tag. Nunca bloqueie conteúdo essencial atrás dele — tem fallback, mas leitores de teste devem ver o conteúdo.

## Performance (v3)

Medido em build de produção com celular emulado (CPU 4x, 4G lento): ~241 KB no carregamento, título do hero visível em ~1 s. Para não regredir:

- **Hero:** entrada com a classe CSS `.v3-enter` (roda no primeiro paint). Não use `Reveal` acima da dobra — ele começa com `opacity: 0` e só aparece depois da hidratação.
- **Accordion de projetos:** o conteúdo (`Details`, com as imagens) só monta ao abrir ou na intenção (hover/foco). Não renderize os painéis fechados.
- **Fontes:** só Geist e Geist Mono têm `preload`. As fontes da v2/CV ficam com `preload: false` no `layout.tsx` e só são baixadas onde são usadas.
- Preact não é opção: o App Router depende de React Server Components. O próximo ganho grande seria Server Components + idioma resolvido no servidor.

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

- `/v2` e os componentes em `components/redesign/` — servem apenas para `/v2` (exceto `Reveal`, compartilhado).
- `/v1` e os componentes legados em `src/app/components/` que ela usa (HomeContent, AboutMeSection, CarouselSection, PetzoneBlock, PlannBlock, TechSection, Navbar, LogoBrand, EmailSend, Dropdown, ButtonNav, Footer legado, etc.) — servem apenas para `/v1`.
- Não remover os links "View v1 ↗" e "v2 ↗" do Footer da v3 — são a ponte para as versões antigas.

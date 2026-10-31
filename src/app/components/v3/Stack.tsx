'use client'

import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../redesign/Reveal";
import { useMyContext } from "@/context/context";

type Level = 3 | 2 | 1;

type Item = { name: string; level: Level; noteKey?: string };

// lista enxuta: sem duplicatas (CI/CD = GitHub Actions), notas só onde informam algo
const groups: { titleKey: string; items: Item[] }[] = [
  {
    titleKey: "v3.stack.gFront",
    items: [
      { name: "React", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "React Native", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Angular", level: 3 },
      { name: "Vue.js", level: 3 },
      { name: "iOS", level: 3 },
      { name: "Android", level: 3 },
    ],
  },
  {
    titleKey: "v3.stack.gBack",
    items: [
      { name: "Node.js", level: 3 },
      { name: "NestJS", level: 3 },
      { name: "Bun", level: 3 },
      { name: "Hono", level: 3 },
      { name: "REST APIs", level: 3 },
      { name: "Express", level: 3 },
      { name: "WebSockets", level: 3 },
      { name: "RabbitMQ", level: 3 },
    ],
  },
  {
    titleKey: "v3.stack.gData",
    items: [
      { name: "PostgreSQL", level: 3 },
      { name: "Prisma / TypeORM", level: 3 },
      { name: "MongoDB", level: 3 },
      { name: "Redis", level: 3 },
      { name: "Firebase", level: 3 },
    ],
  },
  {
    titleKey: "v3.stack.gOps",
    items: [
      { name: "Docker", level: 3 },
      { name: "GitHub Actions", level: 3 },
      { name: "Vercel", level: 3 },
      { name: "AWS", level: 3, noteKey: "stack.noteAws" },
      { name: "Cloudflare", level: 3 },
      { name: "Jest / Vitest", level: 3 },
      { name: "Cypress", level: 3 },
    ],
  },
  {
    titleKey: "v3.stack.gAi",
    items: [
      { name: "LLMs", level: 3, noteKey: "stack.noteLlm" },
      { name: "RAG", level: 3 },
      { name: "pgvector", level: 2 },
      { name: "LangChain", level: 2 },
    ],
  },
];

const LEVELS: { level: Level; key: string }[] = [
  { level: 3, key: "stack.lvlDaily" },
  { level: 2, key: "stack.lvlProjects" },
  { level: 1, key: "stack.lvlExploring" },
];

// a legenda mostra só os níveis que aparecem na lista
const usedLevels = new Set(groups.flatMap((g) => g.items.map((it) => it.level)));

function Bars({ level }: { level: Level }) {
  return (
    <span aria-hidden className="inline-flex items-end gap-[2px]">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className="block w-[3px]"
          style={{ height: 4 + i * 2, background: i <= level ? "var(--text)" : "var(--border-strong)" }}
        />
      ))}
    </span>
  );
}

export function Stack() {
  const { t } = useMyContext();
  const levelLabel = (lv: Level) => t(LEVELS.find((l) => l.level === lv)!.key);

  return (
    <section id="stack" className="px-6 md:px-10 pb-24 md:pb-40 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="03"
          title={t("v3.section.stack")}
          aside={
            <span className="inline-flex flex-wrap justify-end gap-x-4 gap-y-2">
              {LEVELS.filter((l) => usedLevels.has(l.level)).map((l) => (
                <span key={l.level} className="inline-flex items-center gap-1.5">
                  <Bars level={l.level} />
                  {t(l.key)}
                </span>
              ))}
            </span>
          }
        />

        <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 mb-12 md:mb-16">
          <p className="col-span-12 md:col-span-6 text-lg md:text-xl tracking-[-0.02em]" style={{ color: "var(--muted)" }}>
            {t("v3.stack.lead")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 sm:gap-x-6">
          {groups.map((g, gi) => (
            <Reveal key={g.titleKey} delay={gi * 60}>
              <div className="border-t pt-4" style={{ borderColor: "var(--border-strong)" }}>
                <h3 className="text-base font-medium tracking-[-0.01em]">{t(g.titleKey)}</h3>
                <ul className="mt-4 flex flex-col">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-baseline justify-between gap-3 py-2 border-b hairline">
                      <span className="text-sm">
                        {it.name}
                        {it.noteKey && (
                          <span className="block text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                            {t(it.noteKey)}
                          </span>
                        )}
                      </span>
                      <span title={levelLabel(it.level)}>
                        <Bars level={it.level} />
                        <span className="sr-only">{levelLabel(it.level)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

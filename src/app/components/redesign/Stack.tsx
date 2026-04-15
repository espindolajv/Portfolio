'use client'

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { useMyContext } from "@/context/context";

type Level = "Daily" | "Projects" | "Exploring";

const LEVEL_DOTS: Record<Level, number> = {
  Daily: 3,
  Projects: 2,
  Exploring: 1,
};

type Item = { name: string; level: Level; noteKey?: string };

const groups: {
  index: string;
  titleKey: string;
  capKey: string;
  items: Item[];
}[] = [
  {
    index: "01",
    titleKey: "stack.g1Title",
    capKey: "stack.g1Cap",
    items: [
      { name: "React", level: "Daily" },
      { name: "Next.js", level: "Daily" },
      { name: "TypeScript", level: "Daily" },
      { name: "React Native", level: "Projects" },
      { name: "Tailwind CSS", level: "Daily" },
      { name: "Angular", level: "Projects", noteKey: "stack.noteMaint" },
      { name: "Vue.js", level: "Exploring" },
    ],
  },
  {
    index: "02",
    titleKey: "stack.g2Title",
    capKey: "stack.g2Cap",
    items: [
      { name: "Node.js", level: "Daily" },
      { name: "NestJS", level: "Daily" },
      { name: "Fastify", level: "Projects" },
      { name: "Express", level: "Projects" },
      { name: "C# / .NET", level: "Projects" },
      { name: "REST / OpenAPI", level: "Daily" },
      { name: "WebSockets", level: "Projects" },
      { name: "RabbitMQ", level: "Projects", noteKey: "stack.noteQueues" },
      { name: "MQTT", level: "Projects", noteKey: "stack.noteIot" },
      { name: "Kafka", level: "Exploring", noteKey: "stack.noteStream" },
    ],
  },
  {
    index: "03",
    titleKey: "stack.g3Title",
    capKey: "stack.g3Cap",
    items: [
      { name: "PostgreSQL", level: "Daily" },
      { name: "MongoDB", level: "Projects", noteKey: "stack.noteNosql" },
      { name: "Prisma", level: "Daily" },
      { name: "Redis", level: "Projects" },
      { name: "Firebase", level: "Projects" },
    ],
  },
  {
    index: "04",
    titleKey: "stack.g4Title",
    capKey: "stack.g4Cap",
    items: [
      { name: "Docker", level: "Daily" },
      { name: "AWS", level: "Projects", noteKey: "stack.noteAws" },
      { name: "GitHub Actions", level: "Daily" },
      { name: "Vercel", level: "Daily" },
      { name: "Linux", level: "Projects" },
    ],
  },
  {
    index: "05",
    titleKey: "stack.g5Title",
    capKey: "stack.g5Cap",
    items: [
      { name: "LLMs", level: "Exploring", noteKey: "stack.noteLlm" },
      { name: "RAG", level: "Exploring", noteKey: "stack.noteRag" },
      { name: "Vector DBs", level: "Exploring", noteKey: "stack.notePg" },
      { name: "LangChain", level: "Exploring" },
      { name: "Prompt Engineering", level: "Exploring" },
    ],
  },
];

const FILTERS: ("All" | Level)[] = ["All", "Daily", "Projects", "Exploring"];

function LevelDots({ level }: { level: Level }) {
  const dots = LEVEL_DOTS[level];
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-[5px] h-[5px] rounded-full"
          style={{ background: i < dots ? "var(--accent)" : "var(--border)" }}
        />
      ))}
    </span>
  );
}

export function Stack() {
  const [filter, setFilter] = useState<"All" | Level>("All");
  const { t } = useMyContext();

  const levelLabel = (lv: Level) =>
    lv === "Daily"
      ? t("stack.lvlDaily")
      : lv === "Projects"
      ? t("stack.lvlProjects")
      : t("stack.lvlExploring");

  return (
    <section
      id="stack"
      className="w-full pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="02"
          subtitle={t("section.stackSub")}
          title={t("section.stackTitle")}
          description={t("section.stackDesc")}
        />

        <Reveal>
          <div
            className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-start border-t hairline pt-10"
          >
            <div className="col-span-12 md:col-span-4">
              <div
                className="font-mono-ui text-[11px] tracking-[0.22em] uppercase flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-1.5 w-1.5"
                    style={{ background: "var(--accent)" }}
                  />
                </span>
                {t("stack.nowLabel")}
              </div>
              <h3 className="mt-5 font-display text-4xl md:text-5xl leading-[0.98] tracking-[-0.02em]">
                {t("stack.aiTitle")}{" "}
                <span className="italic" style={{ color: "var(--muted)" }}>
                  {t("stack.aiItalic")}
                </span>
                <span style={{ color: "var(--accent)" }}>.</span>
              </h3>
            </div>
            <div
              className="col-span-12 md:col-span-7 md:col-start-6 text-base leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {t("stack.aiText")}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 md:mt-20 flex flex-wrap items-center gap-2">
            <span
              className="font-mono-ui text-[10px] tracking-[0.22em] uppercase mr-2"
              style={{ color: "var(--muted)" }}
            >
              {t("stack.filter")}
            </span>
            {FILTERS.map((f) => {
              const active = filter === f;
              const lbl =
                f === "All"
                  ? t("stack.all")
                  : f === "Daily"
                  ? t("stack.lvlDaily")
                  : f === "Projects"
                  ? t("stack.lvlProjects")
                  : t("stack.lvlExploring");
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="font-mono-ui text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full transition-all"
                  style={{
                    border: `1px solid ${active ? "var(--text)" : "var(--border)"}`,
                    background: active ? "var(--text)" : "transparent",
                    color: active ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {lbl}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 flex flex-col">
          {groups.map((g) => {
            const visible =
              filter === "All"
                ? g.items
                : g.items.filter((i) => i.level === filter);
            if (visible.length === 0) return null;

            return (
              <Reveal key={g.index}>
                <div className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-t hairline">
                  <div className="col-span-12 md:col-span-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
                        style={{ color: "var(--accent)" }}
                      >
                        {g.index}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl leading-none tracking-[-0.02em]">
                        {t(g.titleKey)}
                      </h3>
                    </div>
                    <p
                      className="mt-3 text-sm"
                      style={{ color: "var(--muted)" }}
                    >
                      {t(g.capKey)}
                    </p>
                  </div>

                  <ul className="col-span-12 md:col-span-8 flex flex-col">
                    {visible.map((item, idx) => (
                      <li
                        key={item.name}
                        className="group relative grid grid-cols-12 gap-4 py-3.5 items-baseline border-b hairline last:border-b-0 transition-colors cursor-default"
                      >
                        <span
                          className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: "var(--accent)" }}
                        />
                        <span
                          className="col-span-1 font-mono-ui text-[10px] tracking-[0.2em]"
                          style={{ color: "var(--muted)" }}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="col-span-6 md:col-span-5 font-display text-xl md:text-2xl tracking-[-0.01em] transition-transform group-hover:translate-x-1">
                          {item.name}
                        </span>
                        <span
                          className="col-span-5 md:col-span-4 font-mono-ui text-[10px] tracking-[0.18em] uppercase"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.noteKey ? t(item.noteKey) : "—"}
                        </span>
                        <span className="col-span-12 md:col-span-2 flex items-center gap-2 justify-start md:justify-end">
                          <LevelDots level={item.level} />
                          <span
                            className="font-mono-ui text-[10px] tracking-[0.18em] uppercase"
                            style={{ color: "var(--muted)" }}
                          >
                            {levelLabel(item.level)}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono-ui text-[11px] tracking-[0.22em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            <span className="flex items-center gap-2">
              <LevelDots level="Daily" /> {t("stack.lvlDaily")}
            </span>
            <span className="flex items-center gap-2">
              <LevelDots level="Projects" /> {t("stack.lvlProjects")}
            </span>
            <span className="flex items-center gap-2">
              <LevelDots level="Exploring" /> {t("stack.lvlExploring")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

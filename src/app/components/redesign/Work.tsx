'use client'

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { MdArrowOutward } from "react-icons/md";
import { useMyContext } from "@/context/context";
import { projects as allProjects, Project } from "../../projects/data";

function contextKey(c: Project["contextType"]) {
  return c === "freelance"
    ? "work.typeFreelance"
    : c === "personal"
      ? "work.typePersonal"
      : "work.typeAcademic";
}

export function Work() {
  const { t } = useMyContext();
  const homeOrder = ["matchmania", "petzone", "evolue"];
  const projects = homeOrder
    .map((id) => allProjects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section
      id="work"
      className="w-full pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="01"
          subtitle={t("section.workSub")}
          title={t("section.workTitle")}
          description={t("section.workDesc")}
        />

        <div className="mt-16 md:mt-24 flex flex-col gap-28 md:gap-40">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="grid grid-cols-12 gap-6 md:gap-10 items-start">
                <div
                  className={`col-span-12 md:col-span-5 ${
                    i % 2 === 1 ? "md:order-2 md:col-start-8" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span
                      className="font-mono-ui text-xs tracking-[0.2em] uppercase"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.index}
                    </span>
                    <span
                      className="font-mono-ui text-xs tracking-[0.2em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.year}
                    </span>
                    <span
                      className="font-mono-ui text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                        background: "var(--accent-soft)",
                      }}
                    >
                      {t(contextKey(p.contextType))}
                    </span>
                    {p.badgeKey && (
                      <span
                        className="font-mono-ui text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full"
                        style={{
                          border: "1px solid var(--accent)",
                          color: "var(--accent)",
                        }}
                      >
                        ▸ {t(p.badgeKey)}
                      </span>
                    )}
                    {typeof p.progress === "number" && (
                      <span
                        className="font-mono-ui text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full inline-flex items-center gap-1.5"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
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
                        {t("work.inProgress")} · {p.progress}%
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-5xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
                    {p.title}
                    <span style={{ color: "var(--accent)" }}>.</span>
                  </h3>
                  <p className="mt-4 text-lg italic font-display" style={{ color: "var(--muted)" }}>
                    {t(p.taglineKey)}
                  </p>
                  <p className="mt-6 text-base leading-relaxed max-w-md">
                    {t(p.descKey)}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((st) => (
                      <span
                        key={st}
                        className="font-mono-ui text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                        }}
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.href}
                    target={p.href?.startsWith("http") ? "_blank" : undefined}
                    rel={p.href?.startsWith("http") ? "noreferrer" : undefined}
                    className="group mt-8 inline-flex items-baseline gap-2 font-mono-ui text-xs tracking-[0.2em] uppercase"
                  >
                    <span className="link-underline">{t("work.viewCase")}</span>
                    <MdArrowOutward className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div
                  className={`col-span-12 md:col-span-7 ${
                    i % 2 === 1 ? "md:order-1 md:col-start-1" : ""
                  }`}
                >
                  {p.cover ? (
                    <div className="relative w-full aspect-[4/3] md:aspect-[5/3.4] overflow-hidden rounded-2xl">
                      <Image
                        src={p.cover}
                        alt={`${p.title} — cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="relative w-full aspect-[5/3.4] rounded-2xl overflow-hidden flex items-center justify-center"
                      style={{
                        background:
                          p.gradient ??
                          "linear-gradient(135deg, var(--accent-soft), transparent 60%), var(--surface)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="font-display text-[14vw] md:text-[10vw] italic"
                        style={{ color: "var(--muted)", opacity: 0.35 }}
                      >
                        {p.title}
                      </span>
                    </div>
                  )}

                  {typeof p.progress === "number" && (
                    <div className="mt-3 h-[2px] w-full" style={{ background: "var(--border)" }}>
                      <div
                        className="h-full transition-[width] duration-700"
                        style={{ width: `${p.progress}%`, background: "var(--accent)" }}
                      />
                    </div>
                  )}

                  {p.gallery.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {p.gallery.map((g, gi) => (
                        <div
                          key={gi}
                          className="relative aspect-[4/3] overflow-hidden rounded-xl"
                        >
                          <Image
                            src={g}
                            alt={`${p.title} — ${gi + 1}`}
                            fill
                            sizes="33vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 md:mt-28 pt-10 border-t hairline flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
            <div
              className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {String(allProjects.length).padStart(2, "0")} / {t("projects.count")}
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all self-start md:self-auto"
              style={{
                border: "1px solid var(--text)",
                color: "var(--text)",
              }}
            >
              {t("work.viewAll")}
              <MdArrowOutward className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

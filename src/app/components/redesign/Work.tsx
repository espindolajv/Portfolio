'use client'

import Image, { StaticImageData } from "next/image";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { MdArrowOutward } from "react-icons/md";
import { useMyContext } from "@/context/context";

import petzoneHome from "../../../../public/Petzone_Home.png";
import petzoneDashboard from "../../../../public/Petzone_Dashboard.png";
import petzoneConsults from "../../../../public/Petzone_Consults.png";
import petzoneVetProfile from "../../../../public/Petzone_VetProfile.png";

type Project = {
  index: string;
  year: string;
  title: string;
  taglineKey: string;
  descKey: string;
  stack: string[];
  cover: StaticImageData | null;
  gallery: StaticImageData[];
  href: string;
  badgeKey?: string;
  typeKey?: string;
};

export function Work() {
  const { t } = useMyContext();

  const projects: Project[] = [
    {
      index: "01",
      year: "2025",
      title: "Matchmania",
      taglineKey: "work.p3Tagline",
      descKey: "work.p3Desc",
      stack: ["React Native", "TypeScript", "Node.js", "NestJS", "PostgreSQL"],
      cover: null,
      gallery: [],
      href: "https://play.google.com/store/apps/details?id=com.matchmania.matchmania&hl=pt_BR",
      badgeKey: "work.storeBadge",
      typeKey: "work.typeFreelance",
    },
    {
      index: "02",
      year: "2024",
      title: "Plann",
      taglineKey: "work.p2Tagline",
      descKey: "work.p2Desc",
      stack: ["Next.js", "React", "TypeScript", "Tailwind"],
      cover: null,
      gallery: [],
      href: "#",
      typeKey: "work.typePersonal",
    },
    {
      index: "03",
      year: "2024",
      title: "Petzone",
      taglineKey: "work.p1Tagline",
      descKey: "work.p1Desc",
      stack: ["Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"],
      cover: petzoneHome,
      gallery: [petzoneDashboard, petzoneConsults, petzoneVetProfile],
      href: "#",
      typeKey: "work.typeAcademic",
    },
  ];

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
                    {p.typeKey && (
                      <span
                        className="font-mono-ui text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded-full"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--muted)",
                          background: "var(--accent-soft)",
                        }}
                      >
                        {t(p.typeKey)}
                      </span>
                    )}
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
      </div>
    </section>
  );
}

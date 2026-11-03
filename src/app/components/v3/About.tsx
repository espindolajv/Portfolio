'use client'

import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../redesign/Reveal";
import { useMyContext } from "@/context/context";

const career = [
  { roleKey: "about.job1Role", companyKey: "about.job1Co", periodKey: "about.job1Period", locKey: "about.job1Loc", notes: ["about.job1n1", "about.job1n2", "about.job1n3"] },
  { roleKey: "v3.about.freeRole", companyKey: "v3.about.freeCo", periodKey: "v3.about.freePeriod", locKey: "v3.about.freeLoc", notes: ["v3.about.freeN1", "v3.about.freeN2", "v3.about.freeN3"] },
  { roleKey: "about.job2Role", companyKey: "about.job2Co", periodKey: "about.job2Period", locKey: "about.job2Loc", notes: ["about.job2n1", "about.job2n2", "about.job2n3"] },
  { roleKey: "about.job3Role", companyKey: "about.job3Co", periodKey: "about.job3Period", locKey: "about.job3Loc", notes: ["about.job3n1", "about.job3n2", "about.job3n3"] },
];

const education = [
  { titleKey: "about.edu1Title", orgKey: "about.edu1Org", periodKey: "about.edu1Period" },
  { titleKey: "about.edu2Title", orgKey: "about.edu2Org", periodKey: "about.edu2Period" },
];

const label = "mono text-[11px] uppercase";

function Timeline({
  title,
  rows,
}: {
  title: string;
  rows: { period?: string; primary: string; secondary: string; aside?: string; notes?: string[] }[];
}) {
  return (
    <div>
      <h3 className={`${label} pb-3 border-b hairline`} style={{ color: "var(--muted)" }}>
        {title}
      </h3>
      <ul>
        {rows.map((r, i) => (
          <li key={i} className="grid grid-cols-12 gap-y-1 md:gap-x-6 py-5 border-b hairline items-baseline">
            {r.period && (
              <span className={`col-span-12 md:col-span-3 ${label}`} style={{ color: "var(--muted)" }}>
                {r.period}
              </span>
            )}
            <div className="col-span-12 md:col-span-6 md:col-start-4">
              <span className="text-base font-medium tracking-[-0.01em]">{r.primary}</span>
              {r.notes && (
                <ul className="mt-2 flex flex-col gap-1 text-sm" style={{ color: "var(--muted)" }}>
                  {r.notes.map((n) => (
                    <li key={n} className="flex gap-2">
                      <span aria-hidden>—</span>
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <span className="col-span-12 md:col-span-3 md:text-right text-sm" style={{ color: "var(--muted)" }}>
              {r.secondary}
              {r.aside && (
                <span className="md:block">
                  <span className="md:hidden"> · </span>
                  {r.aside}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  const { t } = useMyContext();

  return (
    <section id="about" className="px-6 md:px-10 pb-24 md:pb-40 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader index="02" title={t("v3.section.about")} />

        <div>
          <Reveal>
            <p className="max-w-4xl text-2xl md:text-[34px] leading-[1.22] tracking-[-0.03em] text-pretty">
              {t("v3.about.lead")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 grid grid-cols-12 gap-y-6 md:gap-x-6">
              <p className="col-span-12 md:col-span-8 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                {t("v3.about.body")}
              </p>
            </div>
            <Link
              href="/cv"
              className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              <ArrowDownToLine aria-hidden size={16} />
              {t("v3.about.cv")}
            </Link>
          </Reveal>

          <div className="mt-16 md:mt-24 flex flex-col gap-14">
            <Reveal>
              <Timeline
                title={t("v3.about.experience")}
                rows={career.map((c) => ({
                  period: t(c.periodKey),
                  primary: t(c.roleKey),
                  secondary: t(c.companyKey),
                  aside: t(c.locKey),
                  notes: c.notes.map((n) => t(n)),
                }))}
              />
            </Reveal>
            <Reveal>
              <Timeline
                title={t("v3.about.education")}
                rows={education.map((e) => ({
                  period: t(e.periodKey),
                  primary: t(e.titleKey),
                  secondary: t(e.orgKey),
                }))}
              />
            </Reveal>
            <Reveal>
              <Timeline
                title={t("v3.about.languages")}
                rows={[
                  { primary: t("v3.about.langPt"), secondary: t("v3.about.langPtLevel") },
                  { primary: t("v3.about.langEn"), secondary: t("v3.about.langEnLevel") },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

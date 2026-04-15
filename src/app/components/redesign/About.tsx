'use client'

import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { MdOutlineFileDownload } from "react-icons/md";
import { useMyContext } from "@/context/context";

export function About() {
  const { t } = useMyContext();

  const career = [
    {
      roleKey: "about.job1Role",
      companyKey: "about.job1Co",
      periodKey: "about.job1Period",
      locKey: "about.job1Loc",
      notes: ["about.job1n1", "about.job1n2", "about.job1n3"],
    },
    {
      roleKey: "about.job2Role",
      companyKey: "about.job2Co",
      periodKey: "about.job2Period",
      locKey: "about.job2Loc",
      notes: ["about.job2n1", "about.job2n2", "about.job2n3"],
    },
    {
      roleKey: "about.job3Role",
      companyKey: "about.job3Co",
      periodKey: "about.job3Period",
      locKey: "about.job3Loc",
      notes: ["about.job3n1", "about.job3n2", "about.job3n3"],
    },
  ];

  const education = [
    { titleKey: "about.edu1Title", orgKey: "about.edu1Org", periodKey: "about.edu1Period" },
    { titleKey: "about.edu2Title", orgKey: "about.edu2Org", periodKey: "about.edu2Period" },
  ];

  return (
    <section
      id="about"
      className="w-full pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="03"
          subtitle={t("section.aboutSub")}
          title={t("section.aboutTitle")}
        />

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-y-10 md:gap-10">
          <Reveal className="col-span-12 md:col-span-5">
            <p
              className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {t("about.intro")}
            </p>
            <p className="mt-4 font-display text-3xl md:text-4xl leading-[1.05]">
              {t("about.headlineA")}{" "}
              <span className="italic" style={{ color: "var(--muted)" }}>
                {t("about.headlineI")}
              </span>{" "}
              {t("about.headlineB")}
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              {t("about.paraA")}
            </p>
            <p className="mt-6 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              {t("about.paraB")}
            </p>

            <Link
              href="/cv"
              className="mt-10 group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all"
              style={{ border: "1px solid var(--border)" }}
            >
              <MdOutlineFileDownload className="text-lg" />
              {t("about.cv")}
            </Link>
          </Reveal>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-16">
            <div>
              <Reveal>
                <div className="flex items-baseline justify-between pb-4 border-b hairline">
                  <h3 className="font-mono-ui text-xs tracking-[0.22em] uppercase">
                    {t("about.careerTitle")}
                  </h3>
                  <span
                    className="font-mono-ui text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {t("about.careerRange")}
                  </span>
                </div>
              </Reveal>
              <ol className="mt-6 flex flex-col">
                {career.map((c, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-4 py-6 border-b hairline">
                      <div className="col-span-12 md:col-span-4">
                        <div className="font-display text-xl leading-tight">
                          {t(c.roleKey)}
                        </div>
                        <div
                          className="mt-1 font-mono-ui text-[11px] tracking-[0.18em] uppercase"
                          style={{ color: "var(--muted)" }}
                        >
                          {t(c.companyKey)} · {t(c.locKey)}
                        </div>
                      </div>
                      <div
                        className="col-span-12 md:col-span-3 font-mono-ui text-[11px] tracking-[0.18em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        {t(c.periodKey)}
                      </div>
                      <ul
                        className="col-span-12 md:col-span-5 flex flex-col gap-1.5 text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.notes.map((nk, j) => (
                          <li key={j} className="flex gap-2">
                            <span style={{ color: "var(--accent)" }}>—</span>
                            <span>{t(nk)}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div>
              <Reveal>
                <div className="flex items-baseline justify-between pb-4 border-b hairline">
                  <h3 className="font-mono-ui text-xs tracking-[0.22em] uppercase">
                    {t("about.educationTitle")}
                  </h3>
                </div>
              </Reveal>
              <ul className="mt-6 flex flex-col">
                {education.map((e, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <li className="grid grid-cols-12 gap-4 py-6 border-b hairline">
                      <div className="col-span-12 md:col-span-7 font-display text-xl">
                        {t(e.titleKey)}
                      </div>
                      <div
                        className="col-span-12 md:col-span-3 font-mono-ui text-[11px] tracking-[0.18em] uppercase"
                        style={{ color: "var(--muted)" }}
                      >
                        {t(e.orgKey)}
                      </div>
                      <div
                        className="col-span-12 md:col-span-2 font-mono-ui text-[11px] tracking-[0.18em] uppercase text-right"
                        style={{ color: "var(--muted)" }}
                      >
                        {t(e.periodKey)}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

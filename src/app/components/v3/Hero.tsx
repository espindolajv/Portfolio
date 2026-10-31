'use client'

import Link from "next/link";
import { useMyContext } from "@/context/context";

const label = "mono text-[11px] uppercase";

export function Hero() {
  const { t } = useMyContext();

  const socials = [
    { href: "/cv", label: t("v3.hero.cv") },
    { href: "https://github.com/espindolajv", label: "GitHub" },
    { href: "https://www.linkedin.com/in/joaoespmacedo/", label: "LinkedIn" },
  ];

  return (
    <section id="top" className="px-6 md:px-10 pt-36 md:pt-52 pb-20 md:pb-32">
      <div className="max-w-[1440px] mx-auto">
        {/* entrada só com CSS (v3-enter): visível no primeiro paint, sem esperar a hidratação */}
        <div className="v3-enter">
          <p className={label} style={{ color: "var(--muted)" }}>
            {t("v3.hero.kicker")}
          </p>
        </div>

        <div className="v3-enter" style={{ animationDelay: "80ms" }}>
          <h1 className="mt-6 md:mt-8 text-[clamp(2.5rem,6.6vw,6.75rem)] font-medium leading-[0.98] tracking-[-0.05em]">
            <span className="block text-balance">{t("v3.hero.titleA")}</span>
            <span className="block max-w-[18ch] text-balance" style={{ color: "var(--muted)" }}>
              {t("v3.hero.titleB")}
            </span>
          </h1>
        </div>

        <div className="v3-enter" style={{ animationDelay: "180ms" }}>
          <dl className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-12 gap-y-8 gap-x-6 border-t hairline pt-5">
            <div className="md:col-span-3">
              <dt className={label} style={{ color: "var(--muted)" }}>{t("v3.hero.basedLabel")}</dt>
              <dd className="mt-2 text-sm">{t("v3.hero.basedVal")}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className={label} style={{ color: "var(--muted)" }}>{t("v3.hero.nowLabel")}</dt>
              <dd className="mt-2 text-sm">{t("v3.hero.nowVal")}</dd>
            </div>
            <div className="md:col-span-3">
              <dt className={label} style={{ color: "var(--muted)" }}>{t("v3.hero.statusLabel")}</dt>
              <dd className="mt-2 text-sm flex items-center gap-2">
                <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
                {t("v3.hero.statusVal")}
              </dd>
            </div>
            <div className="md:col-span-3">
              <dt className={label} style={{ color: "var(--muted)" }}>{t("v3.hero.linksLabel")}</dt>
              <dd className="mt-2 text-sm flex flex-wrap gap-x-4 gap-y-1">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="link-underline"
                    >
                      {s.label} ↗
                    </Link>
                  );
                })}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

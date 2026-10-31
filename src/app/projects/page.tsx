'use client'

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useMyContext } from "@/context/context";
import { Shell } from "../components/v3/Shell";
import { ProjectIndex } from "../components/v3/ProjectIndex";
import { Reveal } from "../components/redesign/Reveal";
import { projects, ProjectCategory } from "./data";

type Filter = "all" | ProjectCategory;

const FILTERS: { key: Filter; labelKey: string }[] = [
    { key: "all", labelKey: "work.catAll" },
    { key: "apps", labelKey: "work.catApps" },
    { key: "mobile", labelKey: "work.catMobile" },
    { key: "landing", labelKey: "work.catLanding" },
];

export default function ProjectsPage() {
    const { t } = useMyContext();
    const [filter, setFilter] = useState<Filter>("all");

    const counts = useMemo(() => {
        const c: Record<Filter, number> = { all: projects.length, apps: 0, mobile: 0, landing: 0 };
        projects.forEach((p) => {
            c[p.category]++;
        });
        return c;
    }, []);

    const visible = useMemo(() => {
        if (filter === "all") return projects;
        return projects.filter((p) => p.category === filter);
    }, [filter]);

    return (
        <Shell>
            <section className="px-6 md:px-10 pt-32 md:pt-44 pb-24 md:pb-40">
                <div className="max-w-[1440px] mx-auto">
                    <Reveal>
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-sm"
                            style={{ color: "var(--muted)" }}
                        >
                            <ArrowLeft aria-hidden size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                            <span className="link-underline">{t("v3.projects.back")}</span>
                        </Link>
                    </Reveal>

                    <Reveal delay={80}>
                        <div className="mt-10 grid grid-cols-12 gap-y-6 md:gap-x-6 items-end">
                            <h1 className="col-span-12 md:col-span-8 text-[clamp(2.75rem,6.4vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.05em]">
                                {t("v3.projects.title")}
                            </h1>
                            <p className="col-span-12 md:col-span-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                                {t("v3.projects.desc")}
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={160}>
                        <div
                            className="mt-16 md:mt-24 mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t hairline pt-5"
                            role="group"
                            aria-label={t("projects.filterLabel")}
                        >
                            {FILTERS.map((f) => {
                                const active = filter === f.key;
                                return (
                                    <button
                                        key={f.key}
                                        onClick={() => setFilter(f.key)}
                                        aria-pressed={active}
                                        className="py-2 text-sm inline-flex items-baseline gap-1.5 transition-colors hover:text-[var(--text)]"
                                        style={{ color: active ? "var(--text)" : "var(--muted)" }}
                                    >
                                        <span className={active ? "underline underline-offset-[6px] decoration-1" : ""}>
                                            {t(f.labelKey)}
                                        </span>
                                        <span className="mono text-[11px]">({String(counts[f.key]).padStart(2, "0")})</span>
                                    </button>
                                );
                            })}
                        </div>
                    </Reveal>

                    {visible.length > 0 ? (
                        <ProjectIndex items={visible} />
                    ) : (
                        <p className="py-20 text-center text-sm" style={{ color: "var(--muted)" }}>
                            {t("projects.empty")}
                        </p>
                    )}
                </div>
            </section>
        </Shell>
    );
}

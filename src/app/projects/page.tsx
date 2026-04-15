'use client'

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import { useMyContext } from "@/context/context";
import { Nav } from "../components/redesign/Nav";
import { Footer } from "../components/redesign/Footer";
import { Reveal } from "../components/redesign/Reveal";
import { projects, Project, ProjectCategory } from "./data";

type Filter = "all" | ProjectCategory;

const FILTERS: { key: Filter; labelKey: string }[] = [
    { key: "all", labelKey: "work.catAll" },
    { key: "apps", labelKey: "work.catApps" },
    { key: "mobile", labelKey: "work.catMobile" },
    { key: "landing", labelKey: "work.catLanding" },
];

function contextKey(c: Project["contextType"]) {
    return c === "freelance"
        ? "work.typeFreelance"
        : c === "personal"
            ? "work.typePersonal"
            : "work.typeAcademic";
}

function ProjectCard({ p }: { p: Project }) {
    const { t } = useMyContext();
    const isExternal = p.href?.startsWith("http");
    const aspect =
        p.category === "mobile"
            ? "aspect-[3/4]"
            : p.category === "landing"
                ? "aspect-[16/10]"
                : "aspect-[4/3]";

    return (
        <a
            href={p.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="group flex flex-col gap-5"
        >
            <div
                className={`relative w-full ${aspect} overflow-hidden rounded-2xl`}
                style={{
                    border: "1px solid var(--border)",
                    background: p.gradient ?? "var(--surface)",
                }}
            >
                {p.cover ? (
                    <Image
                        src={p.cover}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-end justify-start p-6">
                        <span
                            className="font-display italic text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]"
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                textShadow: "0 2px 24px rgba(0,0,0,0.25)",
                            }}
                        >
                            {p.title}
                        </span>
                    </div>
                )}

                <div
                    className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5"
                    style={{
                        background: "var(--text)",
                        color: "var(--bg)",
                    }}
                >
                    <MdArrowOutward className="text-lg" />
                </div>

                <div className="absolute top-4 left-4 flex gap-2">
                    <span
                        className="font-mono-ui text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{
                            background: "rgba(0,0,0,0.35)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        {t(`work.cat${p.category.charAt(0).toUpperCase()}${p.category.slice(1)}`)}
                    </span>
                </div>
            </div>

            <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                    <span
                        className="font-mono-ui text-[10px] tracking-[0.22em] uppercase"
                        style={{ color: "var(--accent)" }}
                    >
                        {p.index}
                    </span>
                    <span
                        className="font-mono-ui text-[10px] tracking-[0.22em] uppercase"
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

                {typeof p.progress === "number" && (
                    <div className="mt-3 h-[2px] w-full" style={{ background: "var(--border)" }}>
                        <div
                            className="h-full"
                            style={{
                                width: `${p.progress}%`,
                                background: "var(--accent)",
                            }}
                        />
                    </div>
                )}

                <h3 className="mt-3 font-display text-3xl md:text-4xl leading-[0.98] tracking-[-0.02em]">
                    {p.title}
                    <span style={{ color: "var(--accent)" }}>.</span>
                </h3>

                <p
                    className="mt-2 text-sm font-display italic"
                    style={{ color: "var(--muted)" }}
                >
                    {t(p.taglineKey)}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((st) => (
                        <span
                            key={st}
                            className="font-mono-ui text-[9px] tracking-[0.14em] uppercase px-2 py-0.5 rounded-full"
                            style={{
                                border: "1px solid var(--border)",
                                color: "var(--muted)",
                            }}
                        >
                            {st}
                        </span>
                    ))}
                    {p.stack.length > 4 && (
                        <span
                            className="font-mono-ui text-[9px] tracking-[0.14em] uppercase px-2 py-0.5"
                            style={{ color: "var(--muted)" }}
                        >
                            +{p.stack.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </a>
    );
}

export default function ProjectsPage() {
    const { color, t } = useMyContext();
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
        <body
            className={`grain overflow-x-hidden ${color ? "theme-light" : ""}`}
            style={{ background: "var(--bg)", color: "var(--text)" }}
        >
            <Nav />
            <main className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
                <div className="max-w-[1440px] mx-auto">
                    <Reveal>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono-ui text-[11px] tracking-[0.22em] uppercase mb-10"
                            style={{ color: "var(--muted)" }}
                        >
                            <MdArrowBack /> {t("work.backHome")}
                        </Link>
                    </Reveal>

                    <div className="grid grid-cols-12 gap-y-6 md:gap-6 items-baseline pb-10 md:pb-12 border-b hairline">
                        <Reveal className="col-span-12 md:col-span-4 flex items-baseline gap-4">
                            <span
                                className="font-mono-ui text-xs tracking-[0.22em] uppercase"
                                style={{ color: "var(--accent)" }}
                            >
                                {String(projects.length).padStart(2, "0")}
                            </span>
                            <span
                                className="font-mono-ui text-xs tracking-[0.22em] uppercase"
                                style={{ color: "var(--muted)" }}
                            >
                                {t("projects.headerSub")}
                            </span>
                        </Reveal>
                        <Reveal className="col-span-12 md:col-span-8">
                            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-[-0.02em]">
                                {t("projects.headerTitle")}
                            </h1>
                            <p
                                className="mt-6 max-w-xl text-base md:text-lg"
                                style={{ color: "var(--muted)" }}
                            >
                                {t("projects.headerDesc")}
                            </p>
                        </Reveal>
                    </div>

                    <Reveal>
                        <div className="mt-10 flex flex-wrap items-center gap-2">
                            <span
                                className="font-mono-ui text-[10px] tracking-[0.22em] uppercase mr-2"
                                style={{ color: "var(--muted)" }}
                            >
                                {t("projects.filterLabel")}
                            </span>
                            {FILTERS.map((f) => {
                                const active = filter === f.key;
                                return (
                                    <button
                                        key={f.key}
                                        onClick={() => setFilter(f.key)}
                                        className="font-mono-ui text-[11px] tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full transition-all flex items-center gap-2"
                                        style={{
                                            border: `1px solid ${active ? "var(--text)" : "var(--border)"}`,
                                            background: active ? "var(--text)" : "transparent",
                                            color: active ? "var(--bg)" : "var(--muted)",
                                        }}
                                        aria-pressed={active}
                                    >
                                        <span>{t(f.labelKey)}</span>
                                        <span
                                            className="text-[9px]"
                                            style={{ opacity: active ? 0.7 : 1 }}
                                        >
                                            {String(counts[f.key]).padStart(2, "0")}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </Reveal>

                    {visible.length > 0 ? (
                        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                            {visible.map((p, i) => (
                                <Reveal key={p.id} delay={(i % 3) * 80}>
                                    <ProjectCard p={p} />
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <div
                            className="mt-20 py-20 text-center font-mono-ui text-xs tracking-[0.22em] uppercase"
                            style={{ color: "var(--muted)" }}
                        >
                            {t("projects.empty")}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </body>
    );
}

'use client'

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ProjectIndex } from "./ProjectIndex";
import { useMyContext } from "@/context/context";
import { inCategory, projects, ProjectCategory } from "../../projects/data";

const CATEGORIES: { key: ProjectCategory; labelKey: string }[] = [
  { key: "apps", labelKey: "v3.work.catApps" },
  { key: "mobile", labelKey: "v3.work.catMobile" },
  { key: "landing", labelKey: "v3.work.catLanding" },
];

const pad = (n: number) => String(n).padStart(2, "0");

const groups = CATEGORIES.map((c) => ({
  ...c,
  items: projects.filter((p) => inCategory(p, c.key)),
})).filter((g) => g.items.length > 0);

/** Trabalhos: carrossel com um slide por categoria; o título da seção acompanha o slide. */
export function Work() {
  const { t } = useMyContext();
  const [viewportRef, embla] = useEmblaCarousel({ align: "start" });
  const [selected, setSelected] = useState(0);
  const [height, setHeight] = useState<number>();
  const [openId, setOpenId] = useState<string | null>(null);
  // altura só anima na troca de slide; no accordion ela acompanha sem atraso
  const [slideChanging, setSlideChanging] = useState(false);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!embla) return;
    let timer: number | undefined;
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
      setOpenId(null);
      setSlideChanging(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setSlideChanging(false), 500);
    };
    onSelect();
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      window.clearTimeout(timer);
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla]);

  // viewport acompanha a altura do slide ativo; os inativos saem da ordem de tab
  useEffect(() => {
    const slides = slidesRef.current;
    slides.forEach((el, i) => el?.toggleAttribute("inert", i !== selected));
    const el = slides[selected];
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [selected]);

  const go = useCallback(
    (i: number) => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      embla?.scrollTo(i, reduce);
    },
    [embla]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(Math.max(0, selected - 1));
    if (e.key === "ArrowRight") go(Math.min(groups.length - 1, selected + 1));
  };

  // só o ícone; a área clicável continua 44px
  const arrow =
    "w-11 h-11 flex items-center justify-center transition-[opacity,transform] duration-300 hover:opacity-60 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:opacity-20";

  return (
    <section id="work" className="px-6 md:px-10 pb-24 md:pb-40 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="01"
          title={t(groups[selected].labelKey)}
          aside={
            <span className="tabular-nums" aria-live="polite">
              {pad(selected + 1)} / {pad(groups.length)}
            </span>
          }
          actions={
            <div className="flex items-center gap-1 -mr-2.5">
              <button
                onClick={() => go(selected - 1)}
                disabled={selected === 0}
                aria-label={t("v3.work.prev")}
                className={`${arrow} hover:-translate-x-0.5`}
              >
                <ArrowLeft aria-hidden size={28} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => go(selected + 1)}
                disabled={selected === groups.length - 1}
                aria-label={t("v3.work.next")}
                className={`${arrow} hover:translate-x-0.5`}
              >
                <ArrowRight aria-hidden size={28} strokeWidth={1.5} />
              </button>
            </div>
          }
        />

        <div role="region" aria-roledescription="carousel" aria-label={t("v3.section.work")} onKeyDown={onKeyDown}>
          <div
            ref={viewportRef}
            className={`overflow-hidden ${slideChanging ? "transition-[height] duration-500 [transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none" : ""}`}
            style={{ height }}
          >
            <div className="flex items-start">
              {groups.map((g, i) => (
                <div
                  key={g.key}
                  ref={(el) => {
                    slidesRef.current[i] = el;
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${t(g.labelKey)} — ${i + 1} / ${groups.length}`}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <ProjectIndex items={g.items} hideCategory openId={openId} onOpenChange={setOpenId} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              {groups.map((g, i) => {
                const current = i === selected;
                return (
                  <button
                    key={g.key}
                    onClick={() => go(i)}
                    aria-current={current}
                    className="py-2 text-sm inline-flex items-baseline gap-1.5 transition-colors hover:text-[var(--text)]"
                    style={{ color: current ? "var(--text)" : "var(--muted)" }}
                  >
                    <span className={current ? "underline underline-offset-[6px] decoration-1" : ""}>{t(g.labelKey)}</span>
                    <span className="mono text-[11px]">({pad(g.items.length)})</span>
                  </button>
                );
              })}
            </div>

            <Link href="/projects" className="group inline-flex items-center gap-3 text-sm font-medium self-start md:self-auto">
              <span className="link-underline">{t("v3.work.viewAll")}</span>
              <ArrowRight aria-hidden size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

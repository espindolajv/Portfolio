'use client'

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useMyContext } from "@/context/context";
import type { Project } from "../../projects/data";

function contextKey(c: Project["contextType"]) {
  return c === "freelance"
    ? "work.typeFreelance"
    : c === "personal"
      ? "work.typePersonal"
      : "work.typeAcademic";
}

function categoryKey(c: Project["category"]) {
  return `work.cat${c.charAt(0).toUpperCase()}${c.slice(1)}`;
}

const pad = (n: number) => String(n).padStart(2, "0");
const label = "mono text-[11px] uppercase";

function Progress({ value }: { value: number }) {
  const { t } = useMyContext();
  return (
    <span className={`flex items-center gap-2 ${label}`} style={{ color: "var(--muted)" }}>
      <span
        className="relative h-px w-12"
        style={{ background: "var(--border-strong)" }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t("work.inProgress")}
      >
        <span className="absolute inset-y-0 left-0" style={{ width: `${value}%`, background: "var(--text)" }} />
      </span>
      {t("work.inProgress")} · {value}%
    </span>
  );
}

/** Conteúdo do accordion: prévia + descrição, metadados, stack e link. */
function Details({ p }: { p: Project }) {
  const { t } = useMyContext();
  const external = p.href?.startsWith("http");

  const meta = [
    { k: t("v3.work.colType"), v: t(categoryKey(p.category)) },
    { k: t("v3.work.context"), v: t(contextKey(p.contextType)) },
    { k: t("v3.work.colYear"), v: p.year },
  ];

  return (
    <div className="grid grid-cols-12 gap-y-8 md:gap-x-6 pb-10 md:pb-14">
      <div className="col-span-12 md:col-span-6 md:col-start-2">
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: "var(--surface)" }}>
          {p.cover ? (
            <Image
              src={p.cover}
              alt={`${p.title} — ${t("v3.work.preview")}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8">
              <span className={label} style={{ color: "var(--muted)" }}>
                {t("v3.work.noPreview")}
              </span>
              <span className="text-4xl md:text-6xl font-medium tracking-[-0.045em]">{p.title}</span>
            </div>
          )}
        </div>
        {p.gallery.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-3">
            {p.gallery.map((g, gi) => (
              <div key={gi} className="relative aspect-[4/3] overflow-hidden" style={{ background: "var(--surface)" }}>
                <Image src={g} alt={`${p.title} — ${gi + 1}`} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover object-top" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col">
        <p className="text-xl md:text-2xl leading-[1.25] tracking-[-0.02em] text-pretty">{t(p.taglineKey)}</p>
        <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          {t(p.descKey)}
        </p>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-t hairline pt-4">
          {meta.map((m) => (
            <div key={m.k}>
              <dt className={label} style={{ color: "var(--muted)" }}>{m.k}</dt>
              <dd className="mt-1.5 text-sm">{m.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 border-t hairline pt-4">
          <p className={label} style={{ color: "var(--muted)" }}>{t("v3.work.colStack")}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <li key={s} className="text-xs px-2.5 py-1 rounded-full border hairline">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {p.href && p.href !== "#" && (
          <a
            href={p.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group mt-8 self-start inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            {p.badgeKey ? t(p.badgeKey) : t("work.visitSite")}
            <ArrowUpRight aria-hidden size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * Lista-índice de projetos; cada linha abre um accordion (um por vez).
 * Controlado via `openId`/`onOpenChange` (carrossel da home) ou com estado interno (/projects).
 */
export function ProjectIndex({
  items,
  hideCategory = false,
  openId,
  onOpenChange,
}: {
  items: Project[];
  hideCategory?: boolean;
  openId?: string | null;
  onOpenChange?: (id: string | null) => void;
}) {
  const { t } = useMyContext();
  const [innerOpen, setInnerOpen] = useState<string | null>(null);
  const open = openId !== undefined ? openId : innerOpen;
  const setOpen = onOpenChange ?? setInnerOpen;

  // painéis só montam ao abrir (ou na intenção: hover/foco), para as imagens não pesarem no carregamento;
  // depois de montados ficam, para a animação de fechar ter conteúdo
  const [mounted, setMounted] = useState<Set<string>>(() => new Set());
  const mount = (id: string) =>
    setMounted((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));

  return (
    <div>
      <div
        className={`hidden md:grid grid-cols-12 gap-x-6 pb-3 border-b hairline ${label}`}
        style={{ color: "var(--muted)" }}
      >
        <span className="col-span-1">{t("v3.work.colIndex")}</span>
        <span className="col-span-4">{t("v3.work.colProject")}</span>
        <span className="col-span-3">{t("v3.work.colType")}</span>
        <span className="col-span-3">{t("v3.work.colStack")}</span>
        <span className="col-span-1 text-right">{t("v3.work.colYear")}</span>
      </div>

      <ul className="group/list">
        {items.map((p, i) => {
          const isOpen = open === p.id;
          const btnId = `project-${p.id}`;
          const panelId = `project-${p.id}-details`;

          return (
            <li
              key={p.id}
              className="border-b hairline transition-opacity duration-300 md:group-hover/list:opacity-30 md:hover:!opacity-100"
            >
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  mount(p.id);
                  setOpen(isOpen ? null : p.id);
                }}
                onPointerEnter={() => mount(p.id)}
                onFocus={() => mount(p.id)}
                className="group w-full text-left grid grid-cols-12 gap-y-2 md:gap-x-6 items-baseline py-6 md:py-8"
              >
                <span className={`col-span-2 md:col-span-1 ${label}`} style={{ color: "var(--muted)" }}>
                  {pad(i + 1)}
                </span>

                <h3 className="col-span-10 md:col-span-4 text-[28px] md:text-[40px] font-medium leading-[1.05] tracking-[-0.04em]">
                  {p.title}
                </h3>

                <span className="col-span-7 col-start-3 md:col-span-3 md:col-start-auto text-sm flex flex-col gap-1.5">
                  {hideCategory ? (
                    <span>{t(contextKey(p.contextType))}</span>
                  ) : (
                    <span>
                      {t(categoryKey(p.category))}
                      <span style={{ color: "var(--muted)" }}> · {t(contextKey(p.contextType))}</span>
                    </span>
                  )}
                  {typeof p.progress === "number" && <Progress value={p.progress} />}
                  {p.badgeKey && (
                    <span className={label} style={{ color: "var(--muted)" }}>
                      {t(p.badgeKey)}
                    </span>
                  )}
                </span>

                <span className="hidden md:block col-span-3 text-sm" style={{ color: "var(--muted)" }}>
                  {p.stack.slice(0, 3).join(" · ")}
                </span>

                <span className="col-span-3 md:col-span-1 flex items-center justify-end gap-3 mono text-[11px]" style={{ color: "var(--muted)" }}>
                  {p.year}
                  <Plus
                    aria-hidden
                    size={18}
                    strokeWidth={1.5}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "group-hover:rotate-90"}`}
                    style={{ color: "var(--text)" }}
                  />
                </span>
              </button>

              <div id={panelId} role="region" aria-labelledby={btnId} className="accordion" data-open={isOpen}>
                <div>{(isOpen || mounted.has(p.id)) && <Details p={p} />}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

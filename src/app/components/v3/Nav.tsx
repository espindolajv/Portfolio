'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useMyContext } from "@/context/context";
import { LANGS, Lang } from "@/app/i18n/dict";

export function Nav() {
  const { color, handleColor, lang, setLang, t } = useMyContext();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // fora da home, as âncoras apontam para "/#secao"
  const base = pathname === "/" ? "" : "/";
  const links = [
    { href: `${base}#work`, label: t("v3.nav.work") },
    { href: `${base}#about`, label: t("v3.nav.about") },
    { href: `${base}#stack`, label: t("v3.nav.stack") },
    { href: `${base}#contact`, label: t("v3.nav.contact") },
  ];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // crossfade da página inteira via View Transitions; sem suporte ou com reduced-motion, troca direto
  const switchLang = (l: Lang) => {
    if (l === lang) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return setLang(l);
    document.startViewTransition(() => flushSync(() => setLang(l)));
  };

  // na home, o nome rola suave até o topo em vez de renavegar (que pula direto)
  const scrollTop = (e: React.MouseEvent) => {
    if (pathname !== "/") return;
    e.preventDefault();
    setOpen(false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  const langSwitch = (
    <div className="flex items-center gap-1" role="group" aria-label={t("v3.nav.language")}>
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => switchLang(l.code as Lang)}
            aria-pressed={active}
            className="mono text-[11px] px-1.5 py-2 transition-colors hover:text-[var(--text)]"
            style={{ color: active ? "var(--text)" : "var(--muted)" }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b hairline backdrop-blur-md"
      style={{ background: "var(--nav-bg)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-14 grid grid-cols-12 gap-x-6 items-center">
        <Link href="/" onClick={scrollTop} className="col-span-8 md:col-span-3 text-sm font-medium tracking-[-0.01em] whitespace-nowrap">
          João Victor Macedo
        </Link>

        <nav className="hidden md:flex col-span-6 items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:text-[var(--text)]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-4 md:col-span-3 flex items-center justify-end gap-3">
          <div className="hidden sm:block">{langSwitch}</div>
          <button
            onClick={handleColor}
            aria-label={t("v3.nav.theme")}
            className="w-9 h-9 -mr-2 flex items-center justify-center rounded-full transition-colors hover:bg-[var(--accent-soft)]"
          >
            {color ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <button
            className="md:hidden text-sm py-2"
            aria-expanded={open}
            aria-controls="v3-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? t("v3.nav.close") : t("v3.nav.menu")}
          </button>
        </div>
      </div>

      <div
        id="v3-mobile-menu"
        hidden={!open}
        className="md:hidden border-t hairline px-6 pb-8"
        style={{ background: "var(--bg)" }}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between py-4 border-b hairline text-3xl font-medium tracking-[-0.03em]"
            >
              {l.label}
              <span className="mono text-[11px]" style={{ color: "var(--muted)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-6 sm:hidden">{langSwitch}</div>
      </div>
    </header>
  );
}

'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useMyContext } from "@/context/context";
import { FiSun, FiMoon } from "react-icons/fi";
import { LANGS, Lang } from "@/app/i18n/dict";

export function Nav() {
  const { color, handleColor, lang, setLang, t } = useMyContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t("nav.work"), index: "01" },
    { href: "#stack", label: t("nav.stack"), index: "02" },
    { href: "#about", label: t("nav.about"), index: "03" },
    { href: "#contact", label: t("nav.contact"), index: "04" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
      style={{
        background: scrolled
          ? color
            ? "rgba(244,241,234,0.72)"
            : "rgba(11,11,12,0.72)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid var(--border)` : "1px solid transparent",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase">
            JV / Macedo
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group font-mono-ui text-xs tracking-[0.16em] uppercase flex items-baseline gap-1.5"
              style={{ color: "var(--muted)" }}
            >
              <span style={{ color: "var(--accent)" }}>{l.index}</span>
              <span className="link-underline transition-colors group-hover:text-[var(--text)]">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="hidden sm:flex items-center rounded-full overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
            role="group"
            aria-label="Language"
          >
            {LANGS.map((l) => {
              const active = lang === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className="font-mono-ui text-[10px] tracking-[0.2em] uppercase px-2.5 py-2 transition-colors"
                  style={{
                    background: active ? "var(--text)" : "transparent",
                    color: active ? "var(--bg)" : "var(--muted)",
                  }}
                  aria-pressed={active}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleColor}
            aria-label="Toggle theme"
            className="font-mono-ui text-xs tracking-[0.16em] uppercase flex items-center gap-2 px-3 py-2 rounded-full transition-colors"
            style={{
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}
          >
            {color ? <FiMoon /> : <FiSun />}
            <span className="hidden sm:inline">
              {color ? t("nav.dark") : t("nav.light")}
            </span>
          </button>

          <button
            className="md:hidden p-2"
            aria-label={t("nav.menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-[1.5px] transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
                style={{ background: "var(--text)" }}
              />
              <span
                className={`block w-5 h-[1.5px] transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
                style={{ background: "var(--text)" }}
              />
              <span
                className={`block w-5 h-[1.5px] transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                style={{ background: "var(--text)" }}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: color ? "#f4f1ea" : "#0b0b0c" }}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-3 border-t hairline font-display text-3xl"
            >
              <span
                className="font-mono-ui text-xs"
                style={{ color: "var(--accent)" }}
              >
                {l.index}
              </span>
              <span>{l.label}</span>
            </Link>
          ))}

          <div
            className="mt-4 flex items-center rounded-full overflow-hidden self-start"
            style={{ border: "1px solid var(--border)" }}
            role="group"
            aria-label="Language"
          >
            {LANGS.map((l) => {
              const active = lang === l.code;
              return (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Lang)}
                  className="font-mono-ui text-[11px] tracking-[0.2em] uppercase px-3 py-2 transition-colors"
                  style={{
                    background: active ? "var(--text)" : "transparent",
                    color: active ? "var(--bg)" : "var(--muted)",
                  }}
                  aria-pressed={active}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}

'use client'

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../redesign/Reveal";
import { useMyContext } from "@/context/context";

const EMAIL = "joao.espmacedo@gmail.com";
const WHATSAPP = { label: "+55 61 99331-3459", href: "https://wa.me/5561993313459" };
const label = "mono text-[11px] uppercase";

export function Contact() {
  const { t } = useMyContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err" | "loading">(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from: email, subject: message }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("err");
    }
  };

  const socials = [
    { href: "https://www.linkedin.com/in/joaoespmacedo/", label: "LinkedIn" },
    { href: "https://github.com/espindolajv", label: "GitHub" },
  ];

  const field =
    "w-full bg-transparent border-b hairline py-3 text-lg outline-none transition-colors focus:border-[var(--text)] placeholder:text-[var(--muted)] placeholder:opacity-70";

  return (
    <section id="contact" className="px-6 md:px-10 pb-24 md:pb-32 scroll-mt-14">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader index="04" title={t("v3.section.contact")} />

        <div className="grid grid-cols-12 gap-y-16 md:gap-x-6">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="max-w-[20ch] text-balance text-2xl md:text-[34px] leading-[1.15] tracking-[-0.03em]">
              {t("v3.contact.title")}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              {t("v3.contact.lead")}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="text-xl md:text-2xl font-medium tracking-[-0.02em] link-underline break-all"
              >
                {EMAIL}
              </a>
              <button
                onClick={copy}
                aria-label={t("v3.contact.copy")}
                className="h-9 px-3 inline-flex items-center gap-1.5 rounded-full border hairline mono text-[11px] uppercase transition-colors hover:bg-[var(--accent-soft)]"
                style={{ color: "var(--muted)" }}
              >
                {copied ? <Check aria-hidden size={13} /> : <Copy aria-hidden size={13} />}
                <span aria-live="polite">{copied ? t("v3.contact.copied") : t("v3.contact.copy")}</span>
              </button>
            </div>

            <a
              href={WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1"
            >
              <span className="text-xl md:text-2xl font-medium tracking-[-0.02em] link-underline">{WHATSAPP.label}</span>
              <span className="mono text-[11px] uppercase inline-flex items-center gap-1" style={{ color: "var(--muted)" }}>
                WhatsApp
                <ArrowUpRight aria-hidden size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            <ul className="mt-8 flex gap-6 text-sm">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1">
                    <span className="link-underline">{s.label}</span>
                    <ArrowUpRight aria-hidden size={14} style={{ color: "var(--muted)" }} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-5" delay={100}>
            <form onSubmit={onSubmit} className="flex flex-col gap-8">
              <div>
                <label htmlFor="v3-email" className={label} style={{ color: "var(--muted)" }}>
                  {t("v3.contact.email")}
                </label>
                <input
                  id="v3-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("v3.contact.placeholder1")}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="v3-message" className={label} style={{ color: "var(--muted)" }}>
                  {t("v3.contact.message")}
                </label>
                <textarea
                  id="v3-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("v3.contact.placeholder2")}
                  className={`${field} resize-none`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-11 px-5 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: "var(--text)", color: "var(--bg)" }}
                >
                  {status === "loading" ? t("v3.contact.submitting") : t("v3.contact.submit")}
                  <ArrowUpRight aria-hidden size={16} />
                </button>
                <p role="status" aria-live="polite" className="text-sm" style={{ color: status === "err" ? "#dc2626" : "var(--muted)" }}>
                  {status === "ok" && t("v3.contact.ok")}
                  {status === "err" && t("v3.contact.err")}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

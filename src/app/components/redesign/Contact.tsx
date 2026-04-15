'use client'

import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { MdArrowOutward } from "react-icons/md";
import { useMyContext } from "@/context/context";

export function Contact() {
  const { t } = useMyContext();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "ok" | "err" | "loading">(null);

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

  return (
    <section
      id="contact"
      className="w-full pt-24 md:pt-40 pb-16 md:pb-24 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader
          index="04"
          subtitle={t("section.contactSub")}
          title={t("section.contactTitle")}
        />

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-6">
            <p
              className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {t("contact.direct")}
            </p>
            <a
              href="mailto:joao.espmacedo@gmail.com"
              className="mt-4 block font-display text-4xl md:text-6xl leading-[1] tracking-[-0.02em] link-underline"
            >
              joao.espmacedo
              <br />
              <span style={{ color: "var(--muted)" }}>@gmail.com</span>
            </a>

            <div className="mt-12 grid grid-cols-2 gap-6 max-w-md">
              <div>
                <div
                  className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {t("contact.location")}
                </div>
                <div className="mt-2 text-base">{t("contact.locationVal")}</div>
              </div>
              <div>
                <div
                  className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {t("contact.availability")}
                </div>
                <div className="mt-2 text-base">{t("contact.availabilityVal")}</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            <form onSubmit={onSubmit} className="flex flex-col">
              <label className="flex flex-col gap-2 py-4 border-b hairline">
                <span
                  className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {t("contact.label1")}
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.placeholder1")}
                  className="bg-transparent outline-none text-xl md:text-2xl font-display placeholder:opacity-30"
                />
              </label>

              <label className="flex flex-col gap-2 py-4 border-b hairline">
                <span
                  className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {t("contact.label2")}
                </span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.placeholder2")}
                  rows={5}
                  className="bg-transparent outline-none text-lg font-sans placeholder:opacity-30 resize-none"
                />
              </label>

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!email || !message || status === "loading"}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "var(--text)", color: "var(--bg)" }}
                >
                  {status === "loading" ? t("contact.submitting") : t("contact.submit")}
                  <MdArrowOutward className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div
                  className="font-mono-ui text-[11px] tracking-[0.22em] uppercase min-h-4"
                  style={{
                    color:
                      status === "ok"
                        ? "var(--accent)"
                        : status === "err"
                        ? "#ef4444"
                        : "var(--muted)",
                  }}
                >
                  {status === "ok" && t("contact.ok")}
                  {status === "err" && t("contact.err")}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

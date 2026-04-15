'use client'

import Image from "next/image";
import Link from "next/link";
import photoMe from "../../../../public/PhotoMe.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Reveal } from "./Reveal";
import { useMyContext } from "@/context/context";

export function Hero() {
  const { t } = useMyContext();

  return (
    <section
      id="home"
      className="relative w-full flex items-start pt-40 md:pt-52 pb-16 md:pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <Reveal delay={0}>
              <div
                className="flex items-center gap-3 font-mono-ui text-[11px] tracking-[0.22em] uppercase mb-8"
                style={{ color: "var(--muted)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: "var(--accent)" }}
                  />
                </span>
                {t("hero.status")}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display leading-[0.92] tracking-[-0.02em] text-[13vw] md:text-[10vw] lg:text-[160px]">
                João Victor<br />
                <span className="italic" style={{ color: "var(--muted)" }}>
                  Macedo<span style={{ color: "var(--accent)" }}>.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 md:mt-16 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-5">
                  <p
                    className="font-mono-ui text-xs tracking-[0.18em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {t("hero.roleLabel")}
                  </p>
                  <p className="mt-2 text-base md:text-lg">
                    {t("hero.roleText")}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6 md:col-start-7">
                  <p
                    className="font-mono-ui text-xs tracking-[0.18em] uppercase"
                    style={{ color: "var(--muted)" }}
                  >
                    {t("hero.aboutLabel")}
                  </p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    {t("hero.aboutText")}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/cv"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: "var(--text)",
                    color: "var(--bg)",
                  }}
                >
                  {t("hero.cv")}
                  <MdArrowOutward className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                >
                  {t("hero.contact")}
                  <MdArrowOutward className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <div className="flex items-center gap-1 ml-1">
                  <Link
                    href="https://www.linkedin.com/in/joaoespmacedo/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://github.com/espindolajv"
                    target="_blank"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-4 hidden md:flex justify-end">
            <Reveal delay={160}>
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-[28px]"
                  style={{
                    border: "1px solid var(--border)",
                  }}
                />
                <div className="relative w-[280px] lg:w-[320px] aspect-[4/5] rounded-[22px] overflow-hidden">
                  <Image
                    src={photoMe}
                    alt="João Victor Macedo"
                    fill
                    sizes="320px"
                    className="object-cover grayscale hover:grayscale-0 transition-[filter] duration-700"
                  />
                </div>
                <div
                  className="absolute -bottom-3 -left-3 px-3 py-1.5 font-mono-ui text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {t("hero.est")}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

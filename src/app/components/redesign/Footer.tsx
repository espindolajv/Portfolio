'use client'

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { useMyContext } from "@/context/context";

export function Footer() {
  const { t } = useMyContext();
  const year = new Date().getFullYear();
  return (
    <footer className="w-full px-6 md:px-10 pt-16 pb-8 border-t hairline">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 items-end pb-16">
          <div className="col-span-12 md:col-span-8">
            <p
              className="font-mono-ui text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {t("footer.lets")}
            </p>
            <p className="mt-4 font-display text-5xl md:text-8xl leading-[0.95] tracking-[-0.02em]">
              {t("footer.thanks")}
              <span style={{ color: "var(--accent)" }}>.</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:items-end">
            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/joaoespmacedo/"
                target="_blank"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ border: "1px solid var(--border)" }}
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/espindolajv"
                target="_blank"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ border: "1px solid var(--border)" }}
              >
                <FaGithub />
              </Link>
            </div>
            <a
              href="mailto:joao.espmacedo@gmail.com"
              className="font-mono-ui text-xs tracking-[0.18em] uppercase link-underline"
              style={{ color: "var(--muted)" }}
            >
              joao.espmacedo@gmail.com
            </a>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-3 justify-between pt-6 border-t hairline font-mono-ui text-[11px] tracking-[0.22em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          <span>© {year} João Victor Macedo</span>
          <div className="flex gap-4">
            <Link href="/v1" className="link-underline">{t("footer.viewV1")}</Link>
            <span>{t("footer.location")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

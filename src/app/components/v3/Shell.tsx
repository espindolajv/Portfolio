'use client'

import { useMyContext } from "@/context/context";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/** <body> da v3: tokens escopados em .v3 (globals.css), claro por padrão. */
export function Shell({ children }: { children: React.ReactNode }) {
  const { color, t } = useMyContext();

  return (
    <body className={`v3 overflow-x-hidden ${color ? "v3-dark" : ""}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:text-sm"
        style={{ background: "var(--text)", color: "var(--bg)" }}
      >
        {t("v3.nav.skip")}
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </body>
  );
}

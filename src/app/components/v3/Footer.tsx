'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { useMyContext } from "@/context/context";

const label = "mono text-[11px] uppercase";

function useBrasiliaTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const { t } = useMyContext();
  const time = useBrasiliaTime();
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-10 pb-8">
      <div className="max-w-[1440px] mx-auto border-t hairline pt-5 grid grid-cols-2 md:grid-cols-12 gap-y-8 gap-x-6 text-sm">
        <div className="md:col-span-3">
          <p className={label} style={{ color: "var(--muted)" }}>©{year}</p>
          <p className="mt-2">João Victor Macedo</p>
        </div>
        <div className="md:col-span-3">
          <p className={label} style={{ color: "var(--muted)" }}>{t("v3.footer.local")}</p>
          <p className="mt-2 tabular-nums">
            Brasília {time ?? "--:--"} <span style={{ color: "var(--muted)" }}>GMT−3</span>
          </p>
        </div>
        <div className="md:col-span-3">
          <p className={label} style={{ color: "var(--muted)" }}>{t("v3.footer.versions")}</p>
          <p className="mt-2 flex gap-4">
            <Link href="/v1" className="link-underline">{t("footer.viewV1")}</Link>
            <Link href="/v2" className="link-underline">{t("v3.footer.viewV2")}</Link>
          </p>
        </div>
        <div className="md:col-span-3 md:text-right self-end">
          <button onClick={() => window.scrollTo({ top: 0 })} className="link-underline">
            {t("v3.footer.top")} ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

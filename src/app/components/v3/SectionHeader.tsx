import { Reveal } from "../redesign/Reveal";

/** Linha de metadados (índice + aside) e título alinhado à margem do conteúdo; `actions` fica na linha do título, à direita. */
export function SectionHeader({
  index,
  title,
  aside,
  actions,
}: {
  index: string;
  title: string;
  aside?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="border-t hairline pt-5 pb-12 md:pb-16">
        <div className="flex items-baseline justify-between gap-6 mono text-[11px] uppercase" style={{ color: "var(--muted)" }}>
          <span>({index})</span>
          {aside && <span className="text-right">{aside}</span>}
        </div>
        <div className="mt-8 md:mt-12 flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-medium leading-[1] tracking-[-0.04em]">
            {/* key: quando o título muda (carrossel de Trabalhos), refaz o fade */}
            <span key={title} className="inline-block motion-safe:animate-fade-in">
              {title}
            </span>
          </h2>
          {actions && <div className="shrink-0">{actions}</div>}
        </div>
      </div>
    </Reveal>
  );
}
